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
import type { ComponentName }            from '@/Lib';
import type { SwapAnimation, SwapProps } from '@/UI/Components';
import type { Slot }                     from 'vue';
import { useRequiredSlotMessage }        from '@/Lib/Utils/Internal';
import { computed }                      from 'vue';

const props = defineProps<SwapProps>();

defineSlots<{
    /** The content to be shown when the swap is on */
    on: Slot;

    /** The content to be shown when the swap is off */
    off: Slot;
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
