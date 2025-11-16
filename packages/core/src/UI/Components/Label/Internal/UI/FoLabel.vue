<template>
    <label :id="labelId"
           :class="[labelClass, isHidden && 'sr-only']"
           v-bind="$attrs"
    >
        <slot>
            {{ useRequiredSlotMessage('FoLabel') }}
        </slot>
    </label>
</template>

<script setup lang="ts">
import type { FloatingLabelComponentName }     from '@/Lib';
import type { WithRequiredDefaultSlot }        from '@/Types';
import type { LabelType }                      from '@/UI/Components';
import type { LabelProps }                     from '@/UI/Components/Label/Internal/Types/Label';
import { useElementId }                        from '@/Lib/UseIdentifiable/Internal';
import { useRequiredSlotMessage }              from '@/Lib/Utils/Internal';
import { isLabelUsedAsSwitchIconInjectionKey } from '@/UI/Components/Label/Internal/Lib';
import { computed, inject }                    from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<LabelProps>(), {
    componentName: 'FoInputText',
    isHidden:      false,
});

defineSlots<WithRequiredDefaultSlot>();

const isLabelUsedAsSwitchIcon = inject(isLabelUsedAsSwitchIconInjectionKey, computed(() => false));

const labelId = useElementId(() => props.id);

const labelClass = computed((): string => {
    if (isLabelUsedAsSwitchIcon.value) {
        return '';
    }

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
            text:     'label-text',
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
