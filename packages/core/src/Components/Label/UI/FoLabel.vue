<template>
    <label :class="[labelClass, isHidden && 'sr-only']"
           v-bind="$attrs"
    >
        <slot />
    </label>
</template>

<script setup lang="ts">
import type { LabelType }             from '@/Components/Label/Types/Label';
import type { LabellableElementName } from '@/Shared/Types/Variants';
import { computed }                   from 'vue';

interface Props {
    element?:  LabellableElementName;
    type?:     LabelType;
    isHidden?: boolean;
}

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
    element:  'label',
    isHidden: false,
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
            inline:   'input-group-text',
        },
        label: {
            text:     'label label-text',
            filled:   '',
            floating: '',
            inline:   '',
        },
        select: {
            text:     '',
            filled:   'select-filled-label',
            floating: 'select-floating-label',
            inline:   '',
        },
    };

    return classes[props.element][props.type];
});
</script>
