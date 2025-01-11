<template>
    <div v-if="options.length"
         class="relative w-full max-w-sm"
    >
        <select :id="id"
                v-model="selectedOption"
                class="select appearance-none"
                :class="[
                    sizeClass,
                    useLabelType('select', () => label.type ?? 'text').value,
                ]"
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

        <FoHorizontalActiveMarker v-if="label.type === 'filled'"
                                  element="select"
        />

        <FoLabel v-if="label.type !== undefined"
                 :id="id"
                 element="select"
                 :type="label.type"
        >
            {{ label.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts">
import type { LabelType }        from '@/components/Label/Types/Label';
import type { Size }             from '@/Shared/Types/Variants';
import FoHorizontalActiveMarker  from '@/components/HorizontalActiveMarker/UI/FoHorizontalActiveMarker.vue';
import { useLabelType }          from '@/components/Label/Lib/UseLabelType';
import FoLabel                   from '@/components/Label/UI/FoLabel.vue';
import { useSize }               from '@/Shared/Lib/UseElementClass';
import { v4 as uuid }            from 'uuid';
import { computed, watchEffect } from 'vue';

export interface Option {
    id:          number;
    text:        string;
    isDisabled?: boolean;
}

interface Props {
    label: {
        text:  string;
        type?: LabelType; // When undefined the label will be a text by default
    };
    options: Option[];
    size?:   Exclude<Size, 'extraLarge'>;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const id = uuid();

const selectedOption = defineModel<Option | null>({ required: true });

const sizeClass = useSize('select', () => props.size);

const isTextLabel = computed(() => {
    return [undefined, 'text'].includes(props.label.type);
});

watchEffect(() => {
    if (props.options.length === 0) {
        throw new Error('No option given.');
    }

    /**
     * when no option is selected and the label is not the disabled option, the selected one will be the first.
     */
    if (selectedOption.value === null && isTextLabel.value === false) {
        selectedOption.value = props.options[0];
    }
});
</script>
