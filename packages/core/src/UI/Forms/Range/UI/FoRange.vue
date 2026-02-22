<template>
    <input v-model="input"
           class="range"
           :class="[colorClass, sizeClass]"
           type="range"
           :min="min"
           :max="max"
           :step="step"
           :disabled="isDisabled"
    >
</template>

<script setup lang="ts">
import type { ComponentName }     from '@/Lib';
import type { RangeProps }        from '@/UI/Forms/Range';
import { useFlyonUIVueAppConfig } from '@/Lib';
import { useColor }               from '@/Lib/UseColor/Internal';
import { useSize }                from '@/Lib/UseSize/Internal';

const props = withDefaults(defineProps<RangeProps>(), {
    min:  0,
    max:  100,
    step: 1,
});

const input = defineModel<number>({ required: true });

const componentName: ComponentName = 'FoRange';
const { config }                   = useFlyonUIVueAppConfig();

const [
    colorClass,
    sizeClass,
] = [
    useColor(config, componentName, () => props.color),
    useSize(config, componentName, () => props.size),
];
</script>
