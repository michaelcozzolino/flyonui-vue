<template>
    <div class="stats"
         :class="[orientationClass, borderClass]"
    >
        <slot>
            {{ useRequiredSlotMessage(componentName) }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { ComponentName }           from '@/Lib';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { StatsProps }              from '@/UI/Components';
import { useBorder }                    from '@/Lib/UseBorder/Internal';
import { useOrientation }               from '@/Lib/UseOrientation/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

const props = withDefaults(defineProps<StatsProps>(), {
    orientation: 'horizontal',
    isBordered:  false,
});

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoStats';

const [
    orientationClass,
    borderClass,
] = [
    useOrientation(componentName, () => props.orientation),
    useBorder(componentName, () => props.isBordered),
];
</script>
