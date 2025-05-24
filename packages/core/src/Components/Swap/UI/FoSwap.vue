<template>
    <label class="swap swap-js"
           :class="[isOn && 'swap-active', animationClass]"
           @click="isOn = !isOn"
    >
        <span class="swap-on">
            <slot name="on">
                {{ useRequiredSlotMessage(componentName, '', 'on') }}
            </slot>
        </span>

        <span class="swap-off">
            <slot name="off">
                {{ useRequiredSlotMessage(componentName, '', 'off') }}
            </slot>
        </span>
    </label>
</template>

<script setup lang="ts">
import type { SwapAnimation, SwapProps } from '@/Components/Swap';
import type { ComponentName }            from '@/Shared/Utils/Internal';
import type { VNode }                    from 'vue';
import { useRequiredSlotMessage }        from '@/Shared/Utils/Internal';
import { computed }                      from 'vue';

const props = defineProps<SwapProps>();

defineSlots<{
    on:  () => VNode[];
    off: () => VNode[];
}>();

const componentName: ComponentName = 'FoSwap';

const isOn = defineModel<boolean>({ required: true });

const animationClass = computed(() => {
    if (props.animation === undefined) {
        return '';
    }

    const animations: Record<SwapAnimation, string> = {
        flip:     'swap-flip',
        rotation: 'swap-rotate',
    };

    return animations[props.animation];
});
</script>
