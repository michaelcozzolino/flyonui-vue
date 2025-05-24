<template>
    <li :class="[orientationClass, stripesClass]">
        <slot />
    </li>
</template>

<script setup lang="ts">
import type { ListGroupItemProps }          from '@/Components/ListGroup';
import type { Orientation }                 from '@/Shared/UseOrientation';
import type { ComponentName }               from '@/Shared/Utils/Internal';
import { listGroupOrientationInjectionKey } from '@/Components/ListGroup/Internal';
import { useOrientation }                   from '@/Shared/UseOrientation/Internal';
import { useStripes }                       from '@/Shared/UseStripes/Internal';
import { computed, inject }                 from 'vue';

const props = withDefaults(defineProps<ListGroupItemProps>(), {
    isStriped: false,
});

const componentName: ComponentName = 'FoListGroupItem';

const listGroupOrientation = inject(listGroupOrientationInjectionKey, computed((): Orientation => 'vertical'));

const [
    orientationClass,
    stripesClass,
] = [
    useOrientation(componentName, listGroupOrientation),
    useStripes(componentName, () => props.isStriped),
];
</script>

<style lang="postcss" scoped>
@reference "tailwindcss";

/* noinspection CssUnusedSymbol */
:slotted(.fo-icon) {
    color: var(--color-base-content);
    @apply me-3;
}
</style>
