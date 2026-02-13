<template>
    <component :is="orientation === 'horizontal' ? 'div' : FoFragment"
               :class="orientation === 'horizontal' && 'flex h-60 flex-wrap'"
               v-bind="orientation === 'horizontal' && $attrs"
    >
        <div class="divider"
             :class="[colorClass, presetClass, alignmentClass, orientationClass]"
             v-bind="orientation !== 'horizontal' && $attrs"
        >
            <slot />
        </div>
    </component>
</template>

<script setup lang="ts">
import type { ComponentName }     from '@/Lib';
import type { WithDefaultSlot }   from '@/Types';
import type { DividerProps }      from '@/UI/Content/Divider';
import { useFlyonUIVueAppConfig } from '@/Lib';
import { useAlignment }           from '@/Lib/UseAlignment/Internal';
import { useTextColor }           from '@/Lib/UseColor/Internal';
import { useOrientation }         from '@/Lib/UseOrientation/Internal';
import { usePreset }              from '@/Lib/UsePreset/Internal';
import { FoFragment }             from '@/UI/Components/Fragment/Internal';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<DividerProps>(), {
    alignment:   'center',
    orientation: 'vertical',
});

defineSlots<WithDefaultSlot>();

const componentName: ComponentName = 'FoDivider';

const { config } = useFlyonUIVueAppConfig();

const [
    colorClass,
    presetClass,
    alignmentClass,
    orientationClass,
] = [
    useTextColor(config, componentName, () => props.color),
    usePreset(config, componentName, () => props.preset),
    useAlignment(componentName, () => props.alignment),
    useOrientation(componentName, () => props.orientation),
];
</script>
