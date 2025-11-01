<template>
    <li :class="[orientationClass, stripesClass]">
        <slot />
    </li>
</template>

<script setup lang="ts">
import type { ComponentName, Orientation  } from '@/Lib';
import type { ListGroupItemProps }          from '@/UI/Components';
import { useOrientation }                   from '@/Lib/UseOrientation/Internal';
import { useStripes }                       from '@/Lib/UseStripes/Internal';
import { listGroupOrientationInjectionKey } from '@/UI/Components/ListGroup/Internal';
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
/* noinspection CssUnusedSymbol */
:slotted(.fo-icon) {
    color: var(--color-base-content);
    margin-inline-end: 0.75rem;
}
</style>
