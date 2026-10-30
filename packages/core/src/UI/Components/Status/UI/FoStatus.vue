<template>
    <component :is="statusTag"
               :class="statusTag === 'div' && 'flex items-center gap-2'"
               v-bind="statusTag === 'div' && $attrs"
    >
        <component :is="animation === 'ping' ? 'div' : FoFragment"
                   :class="animation === 'ping' && 'inline-grid *:[grid-area:1/1]'"
                   v-bind="statusTag !== 'div' && animation === 'ping' && $attrs"
        >
            <div :class="[statusClass, colorClass, sizeClass, animationClass]"
                 v-bind="statusTag !== 'div' && animation !== 'ping' && $attrs"
            />

            <div v-if="animation === 'ping'"
                 :class="[statusClass, colorClass, sizeClass]"
            />
        </component>

        <slot />
    </component>
</template>

<script setup lang="ts">
import type { Color, ComponentName, Size } from '@/Lib';
import type { TailwindAnimation }          from '@/Lib/UseTailwindAnimation/Types';
import type { WithDefaultSlot }            from '@/Types';
import type { StatusProps }                from '@/UI/Components/Status';
import { computed }                        from 'vue';
import { useFlyonUIVueAppConfig }          from '@/Lib';
import { useColor }                        from '@/Lib/UseColor/Internal';
import { useSize }                         from '@/Lib/UseSize/Internal';
import { useTailwindAnimation }            from '@/Lib/UseTailwindAnimation/Internal';
import { FoFragment }                      from '@/UI/Components/Fragment/Internal';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<StatusProps>(), {
    animation: 'none',
});

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
    animationClass,
] = [
    'status',
    useColor(config, componentName, (): Color | undefined => props.color),
    useSize(config, componentName, (): Size | undefined => props.size),
    useTailwindAnimation((): TailwindAnimation => props.animation),
];
</script>
