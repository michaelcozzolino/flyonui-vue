<template>
    <component :is="orientation === 'horizontal' ? 'div' : FoFragment"
               class="w-full"
    >
        <ul class="divide-base-content/25 divide-y"
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
import type { ListGroupProps }                  from '@/Components/ListGroup/Types/ListGroup';
import { FoFragment }                           from '@/Components/Fragment/Internal';
import { listGroupOrientationInjectionKey }     from '@/Components/ListGroup/Internal';
import { useClass, useOrientation, useStripes } from '@/Shared/Internal/Lib';
import { computed, provide }                    from 'vue';

const props = withDefaults(defineProps<ListGroupProps>(), {
    orientation:    'vertical',
    isFlushed:      false,
    withoutGutters: false,
    isStriped:      false,
});

const elementName = 'list-group';

provide(listGroupOrientationInjectionKey, computed(() => props.orientation));

const [
    orientationClass,
    flushClass,
    withoutGuttersClass,
    stripesClass,
] = [
    useOrientation(elementName, () => props.orientation),
    useClass(
        () => props.isFlushed,
        () => props.withoutGutters ? '*:py-3' : '',
        'border-base-content/25 rounded-md border *:first:rounded-t-md *:last:rounded-b-md',
    ),
    useClass(() => props.withoutGutters, '', '*:p-3'),
    useStripes(elementName, () => props.isStriped),
];
</script>
