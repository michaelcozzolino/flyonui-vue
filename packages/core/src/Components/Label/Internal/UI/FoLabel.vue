<template>
    <label :class="[labelClass, isHidden && 'sr-only']"
           v-bind="$attrs"
    >
        <slot>
            {{ useRequiredSlotMessage('label') }}
        </slot>
    </label>
</template>

<script setup lang="ts">
import type { LabelType }             from '@/Components/Label';
import type { LabellableElementName } from '@/Shared/Types/Variants';
import type { VNode }                 from 'vue';
import { useRequiredSlotMessage }     from '@/Shared/Internal';
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
    element:  'input-text',
    isHidden: false,
});

defineSlots<{
    default: () => VNode[];
}>();

const labelClass = computed(() => {
    if (props.type === undefined) {
        return 'label-text';
    }

    const classes: Record<LabellableElementName, Record<LabelType, string>> = {
        'input-text': {
            text:     'label-text',
            floating: 'input-floating-label',
            inline:   'label-text my-auto me-3 p-0',
        },
        'select': {
            text:     '',
            floating: 'select-floating-label',
            inline:   '',
        },
        'textarea': {
            text:     'label-text',
            floating: 'textarea-floating-label',
            inline:   '',
        },
    };

    return classes[props.element][props.type];
});
</script>
