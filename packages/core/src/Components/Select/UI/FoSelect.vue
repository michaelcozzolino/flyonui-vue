<template>
    <div v-if="options.length"
         class="relative w-full max-w-sm"
    >
        <select :id="id"
                v-model="selectedOption"
                class="select appearance-none"
                :class="[labelTypeClass, sizeClass]"
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

        <FoFilledFocused :element-name="elementName"
                         :label-type="label.type"
        />

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
import type { LabelType }               from '@/Components/Label/Internal';
import type { SelectOption }            from '@/Components/Select';
import type { ElementName, Size }       from '@/Shared/Types/Variants';
import { FoFilledFocused }              from '@/Components/Focus/Internal';
import { FoLabel, useLabelType }        from '@/Components/Label/Internal';
import { useSize }                      from '@/Shared/Internal/Lib';
import { computed, useId, watchEffect } from 'vue';

interface Props {
    label: {
        text:  string;
        type?: Exclude<LabelType, 'inline'>; // When undefined the label will be a text by default
    };
    options: K[];
    size?:   Exclude<Size, 'extraLarge'>;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const id = useId();

const selectedOption = defineModel<K | null>({ required: true });

const elementName: ElementName = 'select';

const [
    labelTypeClass,
    sizeClass,
] = [
    useLabelType(elementName, () => props.label.type ?? 'text'),
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
