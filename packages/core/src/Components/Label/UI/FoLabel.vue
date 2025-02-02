<template>
    <label :class="labelClass"
           :for="id"
    >
        <slot />
    </label>
</template>

<script setup lang="ts">
import type { LabelType }             from '@/Components/Label/Types/Label';
import type { LabellableElementName } from '@/Shared/Types/Variants';
import { computed }                   from 'vue';

interface Props {
    id:       string;
    element?: LabellableElementName;
    type?:    LabelType;
}

const props = withDefaults(defineProps<Props>(), {
    element: 'label',
});

const labelClass = computed(() => {
    if (props.type === undefined) {
        return 'label';
    }

    const classes: Record<LabellableElementName, Record<LabelType, string>> = {
        input: {
            text:     '',
            filled:   'input-filled-label',
            floating: 'input-floating-label',
        },
        label: {
            text:     'label label-text',
            filled:   '',
            floating: '',
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
