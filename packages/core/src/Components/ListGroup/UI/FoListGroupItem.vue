<template>
    <li :class="[orientationClass, stripesClass]">
        <slot />
    </li>
</template>

<script setup lang="ts">
import type { ListGroupItemProps }          from '@/Components/ListGroup/Types/ListGroup';
import type { Orientation }                 from '@/Shared/Types/Variants';
import { listGroupOrientationInjectionKey } from '@/Components/ListGroup/Lib/InjectionKeys';
import { useStripes }                       from '@/Shared/Lib/UseClass';
import { useOrientation }                   from '@/Shared/Lib/UseElementClass';
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
