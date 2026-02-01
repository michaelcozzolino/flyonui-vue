<template>
    <component :is="statusTag"
               :class="statusTag === 'div' && 'flex items-center gap-2'"
    >
        <component :is="animation === 'ping' ? 'div' : FoFragment"
                   :class="animation === 'ping' && 'inline-grid *:[grid-area:1/1]'"
        >
            <div :class="[statusClass, colorClass, sizeClass, animationClass]" />

            <div v-if="animation === 'ping'"
                 :class="[statusClass, colorClass, sizeClass]"
            />
        </component>

        <slot />
    </component>
</template>

<script setup lang="ts">
import type { ComponentName }                from '@/Lib';
import type { WithDefaultSlot }              from '@/Types';
import type { StatusAnimation, StatusProps } from '@/UI/Components/Status';
import { useFlyonUIVueAppConfig }            from '@/Lib';
import { useColor }                          from '@/Lib/UseColor/Internal';
import { useSize }                           from '@/Lib/UseSize/Internal';
import { FoFragment }                        from '@/UI/Components/Fragment/Internal';
import { computed }                          from 'vue';

const props = defineProps<StatusProps>();

const slots = defineSlots<WithDefaultSlot>();

const componentName: ComponentName = 'FoStatus';

const { config } = useFlyonUIVueAppConfig();

const statusTag = computed((): 'div' | typeof FoFragment => {
    return props.animation !== undefined && slots.default !== undefined ? 'div' : FoFragment;
});

const [
    statusClass,
    colorClass,
    sizeClass,
] = [
    'status',
    useColor(config, componentName, () => props.color),
    useSize(config, componentName, () => props.size),
];

const animationClass = computed((): string => {
    const animations: Record<StatusAnimation, string> = {
        bounce: 'animate-bounce',
        ping:   'animate-ping',
        pulse:  'animate-pulse',
    };

    return props.animation === undefined ? '' : animations[props.animation];
});
</script>
