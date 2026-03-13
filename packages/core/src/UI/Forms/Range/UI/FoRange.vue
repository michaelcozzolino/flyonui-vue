<template>
    <component :is="slots.steps ? 'div' : FoFragment"
               :class="slots.steps && 'w-full'"
               :style="slots.steps && $attrs.style"
    >
        <input v-model.number="input"
               class="range"
               :class="[colorClass, sizeClass, slots.steps && $attrs.class]"
               type="range"
               :min="min"
               :max="max"
               :step="step"
               :disabled="disabled"
               v-bind="slots.steps === undefined && $attrs"
        >

        <div v-if="slots.steps"
             class="flex justify-between text-xs px-2"
        >
            <slot name="steps" />
        </div>
    </component>
</template>

<script setup lang="ts">
import type { ComponentName }     from '@/Lib';
import type { RangeProps }        from '@/UI/Forms/Range';
import type { Slot }              from 'vue';
import { useFlyonUIVueAppConfig } from '@/Lib';
import { useColor }               from '@/Lib/UseColor/Internal';
import { useSize }                from '@/Lib/UseSize/Internal';
import { FoFragment }             from '@/UI/Components/Fragment/Internal';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<RangeProps>(), {
    min:        0,
    max:        100,
    step:       1,
    isDisabled: false,
});

const slots = defineSlots<{
    /** The step indicators to show for each step */
    steps?: Slot;
}>();

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
