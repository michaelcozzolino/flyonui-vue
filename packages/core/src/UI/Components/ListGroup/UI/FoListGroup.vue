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
import type { ComponentName }               from '@/Lib';
import type { ListGroupProps }              from '@/UI/Components';
import { useClass }                         from '@/Lib/UseClass/Internal';
import { useOrientation }                   from '@/Lib/UseOrientation/Internal';
import { useStripes }                       from '@/Lib/UseStripes/Internal';
import { FoFragment }                       from '@/UI/Components/Fragment/Internal';
import { listGroupOrientationInjectionKey } from '@/UI/Components/ListGroup/Internal';
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
