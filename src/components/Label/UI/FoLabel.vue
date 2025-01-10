<template>
    <label :class="labelClass"
           :for="id"
    >
        <slot />
    </label>
</template>

<script setup lang="ts">
import type { LabelType }             from '@/components/Label/Types/Label';
import type { LabellableElementName } from '@/Shared/Types/Variants';
import { computed }                   from 'vue';

interface Props {
    id:       string;
    element?: LabellableElementName;
    type?:    LabelType;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
});

const labelClass = computed(() => {
    if (props.element === undefined) {
        return props.type === 'text' ? 'label label-text' : '';
    }

    const classes: Record<LabellableElementName, Record<LabelType, string>> = {
        input: {
            text:     '',
            filled:   'input-filled-label',
            floating: 'input-floating-label',
        },
        select: {
            text:     '',
            filled:   'select-filled-label',
            floating: 'select-floating-label',
        },
    };

    return classes[props.element][props.type];
});
</script>
