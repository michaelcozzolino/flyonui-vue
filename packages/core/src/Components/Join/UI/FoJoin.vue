<template>
    <div class="join"
         :class="[orientationClass, responsiveClass]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { ElementName, IsResponsive, Orientation } from '@/Shared/Types';
import type { VNode }                                  from 'vue';
import { useOrientation, useResponsive }               from '@/Shared/Internal';

interface Props extends IsResponsive {
    orientation?: Orientation;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    shape:       'default',
});

defineSlots<{
    default: () => VNode[];
}>();

const elementName: ElementName = 'join';

const [
    orientationClass,
    responsiveClass,
] = [
    useOrientation(elementName, () => props.orientation),
    useResponsive(elementName, () => props.isResponsive),
];
</script>

<style lang="scss" scoped>
:deep(input),
:deep(.input-group),
:slotted(input),
:slotted(.btn) {
    @apply join-item;

}
:deep(div:first-child > input) {
    @apply rounded-s-md
}

:deep(div:last-child > input) {
    @apply rounded-e-md;
}

:slotted(.btn) {
    @apply h-auto;
}

.join > :deep(.input-group:first-child) {
    @apply rounded-e-none;
}

.join > :first-child :deep(.input.rounded-full),
.join > :slotted(.btn.rounded-full:first-child) {
    @apply rounded-s-full;
}

.join > :last-child :deep(.input.rounded-full),
.join > :slotted(.btn.rounded-full:last-child) {
    @apply rounded-e-full;
}
</style>
