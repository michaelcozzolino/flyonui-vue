<template>
    <div class="stats"
         :class="[orientationClass, borderClass]"
    >
        {{ useRequiredSlotMessage(componentName) }}
    </div>
</template>

<script setup lang="ts">
import type { StatsProps }              from '@/Components/Stats';
import type { ComponentName }           from '@/Shared';
import type { WithRequiredDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';
import { useBorder }                    from '@/Shared/UseBorder/Internal';
import { useOrientation }               from '@/Shared/UseOrientation/Internal';
import { useRequiredSlotMessage }       from '@/Shared/Utils/Internal';

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
