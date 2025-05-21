<template>
    <label :class="[labelClass, isHidden && 'sr-only']"
           v-bind="$attrs"
    >
        <slot>
            {{ useRequiredSlotMessage('FoLabel') }}
        </slot>
    </label>
</template>

<script setup lang="ts">
import type { LabelType }                  from '@/Components/Label';
import type { LabelProps }                 from '@/Components/Label/Internal/Types/Label';
import type { FloatingLabelComponentName } from '@/Shared/UseFloatingLabel';
import type { VNode }                      from 'vue';
import { useRequiredSlotMessage }          from '@/Shared/Utils/Internal';
import { computed }                        from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<LabelProps>(), {
    componentName: 'FoInputText',
    isHidden:      false,
});

defineSlots<{
    default: () => VNode[];
}>();

const labelClass = computed(() => {
    if (props.type === undefined) {
        return 'label-text';
    }

    const classes: Record<FloatingLabelComponentName, Record<LabelType, string>> = {
        FoInputText: {
            text:     'label-text',
            floating: 'input-floating-label',
            inline:   'label-text my-auto p-0',
        },
        FoSelect: {
            text:     '',
            floating: 'select-floating-label',
            inline:   '',
        },
        FoTextarea: {
            text:     'label-text',
            floating: 'textarea-floating-label',
            inline:   '',
        },
    };

    return classes[props.componentName][props.type];
});
</script>
