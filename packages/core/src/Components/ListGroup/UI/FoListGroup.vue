<template>
    <component :is="orientation === 'horizontal' ? 'div' : FoFragment"
               class="w-full"
    >
        <ul class="divide-base-content/25"
            :class="[
                orientationClass,
                flushClass,
                stripesClass,
                withoutGuttersClass,
                orientation !== 'horizontal' && $attrs?.class,
            ]"
        >
            <slot />
        </ul>
    </component>
</template>

<script setup lang="ts">
import type { ListGroupProps }              from '@/Components/ListGroup';
import type { ComponentName }               from '@/Shared/Utils/Internal';
import { FoFragment }                       from '@/Components/Fragment/Internal';
import { listGroupOrientationInjectionKey } from '@/Components/ListGroup/Internal';
import { useClass }                         from '@/Shared/UseClass/Internal';
import { useOrientation }                   from '@/Shared/UseOrientation/Internal';
import { useStripes }                       from '@/Shared/UseStripes/Internal';
import { computed, provide }                from 'vue';

const props = withDefaults(defineProps<ListGroupProps>(), {
    orientation:    'vertical',
    isFlushed:      false,
    withoutGutters: false,
    isStriped:      false,
});

const componentName: ComponentName = 'FoListGroup';

provide(listGroupOrientationInjectionKey, computed(() => props.orientation));

const [
    orientationClass,
    flushClass,
    withoutGuttersClass,
    stripesClass,
] = [
    useOrientation(componentName, () => props.orientation),
    useClass(
        () => props.isFlushed,
        () => props.withoutGutters ? '*:py-3' : '',
        'border-base-content/25 rounded-md border',
    ),
    useClass(() => props.withoutGutters, '', '*:p-3'),
    useStripes(componentName, () => props.isStriped),
];
</script>
