<template>
    <div class="card"
         :class="[borderClass, alignmentClass, orientationClass, sizeClass, glassClass]"
    >
        <slot>
            {{ useRequiredSlotMessage(componentName) }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { ComponentName, Orientation, Size } from '@/Lib';
import type { Alignment }                        from '@/Lib/UseAlignment';
import type { WithRequiredDefaultSlot }          from '@/Types';
import type { CardProps }                        from '@/UI/Components/Card';
import { useFlyonUIVueAppConfig }                from '@/Lib';
import { useAlignment }                          from '@/Lib/UseAlignment/Internal';
import { useBorder }                             from '@/Lib/UseBorder/Internal';
import { useGlass }                              from '@/Lib/UseGlass/Internal';
import { useOrientation }                        from '@/Lib/UseOrientation/Internal';
import { useSize }                               from '@/Lib/UseSize/Internal';
import { useRequiredSlotMessage }                from '@/Lib/Utils/Internal';

const props = withDefaults(defineProps<CardProps>(), {
    alignment:   'left',
    orientation: 'vertical',
});

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoCard';

const { config } = useFlyonUIVueAppConfig();

const [
    alignmentClass,
    borderClass,
    orientationClass,
    sizeClass,
    glassClass,
] = [
    useAlignment(componentName, (): Alignment => props.alignment),
    useBorder(componentName, (): boolean | undefined => props.isBordered),
    useOrientation(componentName, (): Orientation => props.orientation),
    useSize(config, componentName, (): Size | undefined => props.size),
    useGlass((): boolean => props.withGlass),
];
</script>
