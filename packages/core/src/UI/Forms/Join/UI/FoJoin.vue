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
import type { ComponentName }           from '@/Lib';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { JoinProps }               from '@/UI/Forms/Join';
import { useOrientation }               from '@/Lib/UseOrientation/Internal';
import { useResponsitivity }            from '@/Lib/UseResponsitivity/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { isInJoinInjectionKey }         from '@/UI/Forms/Join/Internal';
import { provide }                      from 'vue';

const props = withDefaults(defineProps<JoinProps>(), {
    isResponsive: false,
    orientation:  'horizontal',
});

defineSlots<WithRequiredDefaultSlot>();

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
