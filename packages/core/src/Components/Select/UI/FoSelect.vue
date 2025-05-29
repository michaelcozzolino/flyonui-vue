<template>
    <!--    todo: some features are missing  -->
    <div v-if="options.length"
         :class="floatingLabelClass"
    >
        <select :id="id"
                v-model="selectedOption"
                class="select"
                :class="[sizeClass]"
                aria-label="select"
        >
            <option v-if="isTextLabel"
                    disabled
                    :value="null"
            >
                {{ label.text }}
            </option>

            <option v-for="option in options"
                    :key="option.id"
                    :disabled="option.isDisabled"
                    :value="option"
            >
                {{ option.text }}
            </option>
        </select>

        <FoLabel v-if="label.type !== undefined"
                 :for="id"
                 :component-name="componentName"
                 :type="label.type"
        >
            {{ label.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { SelectOption, SelectProps } from '@/Components/Select';
import type { ComponentName }             from '@/Shared/Utils/Internal';
import { FoLabel }                        from '@/Components/Label/Internal';
import { useFloatingLabel }               from '@/Shared/UseFloatingLabel/Internal';
import { useFlyonUIVueAppConfig }         from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                        from '@/Shared/UseSize/Internal';
import { computed, useId, watchEffect }   from 'vue';

const props = defineProps<SelectProps<T, K>>();

const id = useId();

const selectedOption = defineModel<K | null>({ required: true });

const componentName: ComponentName = 'FoSelect';

const { config } = useFlyonUIVueAppConfig();

const [
    floatingLabelClass,
    sizeClass,
] = [
    useFloatingLabel(componentName, () => props.label.type),
    useSize(config, componentName, () => props.size),
];

const isTextLabel = computed(() => {
    return [undefined, 'text'].includes(props.label.type);
});

watchEffect(() => {
    if (props.options.length === 0) {
        throw new Error('No option given.');
    }

    /**
     * when no option is selected and the label is not the null option, the selected one will be the first.
     */
    if (selectedOption.value === null && isTextLabel.value === false) {
        selectedOption.value = props.options[0];
    }
});
</script>
