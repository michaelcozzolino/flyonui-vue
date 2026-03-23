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
            v-bind="orientation !== 'horizontal' ? $attrs : {}"
        >
            <slot>
                {{ useRequiredSlotMessage(componentName) }}
            </slot>
        </ul>
    </component>
</template>

<script setup lang="ts">
import type { ComponentName }               from '@/Lib';
import type { WithRequiredDefaultSlot }     from '@/Types';
import type { ListGroupProps }              from '@/UI/Components';
import { useClass }                         from '@/Lib/UseClass/Internal';
import { useOrientation }                   from '@/Lib/UseOrientation/Internal';
import { useStripes }                       from '@/Lib/UseStripes/Internal';
import { useRequiredSlotMessage }           from '@/Lib/Utils/Internal';
import { FoFragment }                       from '@/UI/Components/Fragment/Internal';
import { listGroupOrientationInjectionKey } from '@/UI/Components/ListGroup/Internal';
import { reactiveOmit }                     from '@vueuse/core';
import { computed, provide }                from 'vue';

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
