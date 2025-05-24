<template>
    <div class="join"
         :class="[orientationClass, responsiveClass]"
    >
        <slot>
            {{ useRequiredSlotMessage('FoJoin') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { JoinProps }         from '@/Components/Join';
import type { ComponentName }     from '@/Shared/Utils/Internal';
import type { VNode }             from 'vue';
import { isInJoinInjectionKey }   from '@/Components/Join/Internal';
import { useOrientation }         from '@/Shared/UseOrientation/Internal';
import { useResponsitivity }      from '@/Shared/UseResponsitivity/Internal';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';
import { provide }                from 'vue';

const props = withDefaults(defineProps<JoinProps>(), {
    isResponsive: false,
    orientation:  'horizontal',
});

defineSlots<{
    default?: () => VNode[];
}>();

provide(isInJoinInjectionKey, true);

const componentName: ComponentName = 'FoJoin';

const [
    orientationClass,
    responsiveClass,
] = [
    useOrientation(componentName, () => props.orientation),
    useResponsitivity(componentName, () => props.isResponsive),
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
