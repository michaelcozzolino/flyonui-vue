<template>
    <!--    todo: some features are missing  -->
    <div v-if="options.length"
         :class="floatingClass"
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
                 element="select"
                 :type="label.type"
        >
            {{ label.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { SelectOption, SelectProps } from '@/Components/Select';
import type { ElementName }               from '@/Shared/Types/Variants';
import { FoLabel }                        from '@/Components/Label/Internal';
import { useFloating, useSize }           from '@/Shared/Internal/Lib';
import { computed, useId, watchEffect }   from 'vue';

const props = withDefaults(defineProps<SelectProps<T, K>>(), {
    size: 'default',
});

const id = useId();

const selectedOption = defineModel<K | null>({ required: true });

const elementName: ElementName = 'select';

const [
    floatingClass,
    sizeClass,
] = [
    useFloating(elementName, () => props.label.type),
    useSize(elementName, () => props.size),
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
