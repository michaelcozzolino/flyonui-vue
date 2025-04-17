<template>
    <div class="join"
         :class="[orientationClass, responsiveClass]"
    >
        <slot>
            {{ useRequiredSlotMessage('join') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { ElementName, IsResponsive, Orientation }           from '@/Shared/Types';
import type { VNode }                                            from 'vue';
import { isInJoinInjectionKey }                                  from '@/Components/Join/Internal';
import { useOrientation, useRequiredSlotMessage, useResponsive } from '@/Shared/Internal';
import { provide }                                               from 'vue';

interface Props extends IsResponsive {
    orientation?: Orientation;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    shape:       'default',
});

defineSlots<{
    default?: () => VNode[];
}>();

provide(isInJoinInjectionKey, true);

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
@reference "tailwindcss";

.join > :first-child :deep(.input.rounded-full),
.join > :slotted(.btn.rounded-full:first-child) {
    @apply rounded-e-none;
}

.join > :last-child :deep(.input.rounded-full),
.join > :slotted(.btn.rounded-full:last-child) {
    @apply rounded-s-none;
}
</style>
