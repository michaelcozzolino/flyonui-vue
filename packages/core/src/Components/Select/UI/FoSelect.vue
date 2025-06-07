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
            <option v-if="defaultLabel?.type === 'text'"
                    :value="null"
            >
                {{ defaultLabel.text }}
            </option>

            <option v-for="option in options"
                    :key="option.id"
                    :disabled="option.isDisabled"
                    :value="option"
            >
                {{ option.text }}
            </option>
        </select>

        <FoLabel v-if="defaultLabel && defaultLabel.type !== 'text'"
                 :for="id"
                 :component-name="componentName"
                 :type="defaultLabel.type"
        >
            {{ defaultLabel.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { SelectOption, SelectProps } from '@/Components/Select';
import type { ComponentName }             from '@/Shared/Utils/Internal';
import { FoLabel, useLabel }              from '@/Components/Label/Internal';
import { useFloatingLabel }               from '@/Shared/UseFloatingLabel/Internal';
import { useFlyonUIVueAppConfig }         from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                        from '@/Shared/UseSize/Internal';
import { useId, watchEffect }             from 'vue';

const props = defineProps<SelectProps<T, K>>();

const id = useId();

const selectedOption = defineModel<K | null>({ required: true });

const componentName: ComponentName = 'FoSelect';

const { config } = useFlyonUIVueAppConfig();

const defaultLabel = useLabel(
    config,
    componentName,
    () => props.label,
);

const [
    floatingLabelClass,
    sizeClass,
] = [
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useSize(config, componentName, () => props.size),
];

watchEffect(() => {
    if (props.options.length === 0) {
        throw new Error('No option given.');
    }

    /**
     * when no option is selected and the label is not the null option, the selected one will be the first.
     */
    if (selectedOption.value === null && defaultLabel.value?.type !== 'text') {
        selectedOption.value = props.options[0];
    }
});
</script>
