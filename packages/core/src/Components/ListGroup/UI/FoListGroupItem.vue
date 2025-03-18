<template>
    <li :class="[orientationClass, stripesClass]">
        <slot />
    </li>
</template>

<script setup lang="ts">
import type { ListGroupItemProps }          from '@/Components/ListGroup/Types/ListGroup';
import type { Orientation }                 from '@/Shared/Types/Variants';
import { listGroupOrientationInjectionKey } from '@/Components/ListGroup/Internal';
import { useOrientation, useStripes }       from '@/Shared/Internal/Lib';
import { computed, inject }                 from 'vue';

const props = withDefaults(defineProps<ListGroupItemProps>(), {
    isStriped: false,
});

const elementName = 'list-group-item';

const listGroupOrientation = inject(listGroupOrientationInjectionKey, computed((): Orientation => 'vertical'));

const [
    orientationClass,
    stripesClass,
] = [
    useOrientation(elementName, listGroupOrientation),
    useStripes(elementName, () => props.isStriped),
];
</script>

<style lang="postcss" scoped>
/* noinspection CssUnusedSymbol */
:slotted(.fo-icon) {
    @apply text-base-content me-3;
}
</style>
