<template>
    <component :is="tag"
               :class="[colorClass, sizeClass]"
    >
        <slot>
            {{ useRequiredSlotMessage('FoHeading') }}
        </slot>
    </component>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot }    from '@/Types';
import type { HeadingLevel, HeadingProps } from '@/UI/Content/Heading';
import { useFlyonUIVueAppConfig }          from '@/Lib';
import { useTextColor }                    from '@/Lib/UseColor/Internal';
import { useRequiredSlotMessage }          from '@/Lib/Utils/Internal';
import { computed }                        from 'vue';

const props = defineProps<HeadingProps>();

defineSlots<WithRequiredDefaultSlot>();

const { config } = useFlyonUIVueAppConfig();

const tag = computed(() => {
    return `h${props.level}`;
});

const [
    colorClass,
    sizeClass,
] = [
    useTextColor(config, 'FoHeading', () => props.color, 'text-base-content'),
    computed(() => {
        const classes: Record<HeadingLevel, string> = {
            1: 'text-4xl',
            2: 'text-3xl',
            3: 'text-2xl',
            4: 'text-xl',
            5: 'text-lg',
            6: 'text-base',
        };

        return classes[props.level];
    }),
];
</script>
