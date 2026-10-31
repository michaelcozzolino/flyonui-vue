<template>
    <component :is="orientation === 'horizontal' ? 'div' : FoFragment"
               :class="orientation === 'horizontal' && 'w-full'"
               v-bind="orientation === 'horizontal' ? reactiveOmit($attrs, 'class') : {}"
    >
        <ul class="divide-base-content/25"
            :class="[
                orientationClass,
                flushClass,
                stripesClass,
                withoutGuttersClass,
            ]"
            v-bind="orientation !== 'horizontal' ? $attrs : { class: $attrs.class }"
        >
            <slot>
                {{ useRequiredSlotMessage(componentName) }}
            </slot>
        </ul>
    </component>
</template>

<script setup lang="ts">
import type { ComponentName, Orientation }  from '@/Lib';
import type { WithRequiredDefaultSlot }     from '@/Types';
import type { ListGroupProps }              from '@/UI/Components';
import { reactiveOmit }                     from '@vueuse/core';
import { computed, provide }                from 'vue';
import { useClass }                         from '@/Lib/UseClass/Internal';
import { useOrientation }                   from '@/Lib/UseOrientation/Internal';
import { useStripes }                       from '@/Lib/UseStripes/Internal';
import { useRequiredSlotMessage }           from '@/Lib/Utils/Internal';
import { FoFragment }                       from '@/UI/Components/Fragment/Internal';
import { listGroupOrientationInjectionKey } from '@/UI/Components/ListGroup/Internal';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<ListGroupProps>(), {
    orientation:    'vertical',
    isFlushed:      false,
    withoutGutters: false,
    isStriped:      false,
});

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoListGroup';

provide(listGroupOrientationInjectionKey, computed((): Orientation => props.orientation));

const [
    orientationClass,
    flushClass,
    withoutGuttersClass,
    stripesClass,
] = [
    useOrientation(componentName, (): Orientation => props.orientation),
    useClass(
        (): boolean => props.isFlushed,
        (): string => props.withoutGutters ? '*:py-3' : '',
        'border-base-content/25 rounded-md border',
    ),
    useClass((): boolean => props.withoutGutters, '', '*:p-3'),
    useStripes(componentName, (): boolean => props.isStriped),
];
</script>
