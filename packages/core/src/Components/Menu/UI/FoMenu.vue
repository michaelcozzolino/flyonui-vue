<template>
    <ul class="menu"
        :class="[orientationClass, sizeClass, flushClass]"
    >
        <slot />
    </ul>
</template>

<script setup lang="ts">
import type { MenuProps }            from '@/Components/Menu';
import type { ElementName }          from '@/Shared/Types/Variants';
import { menuTextPropsInjectionKey } from '@/Components/Menu/Lib/InjectionKeys';
import { useClass }                  from '@/Shared/Lib/UseClass';
import { useOrientation, useSize }   from '@/Shared/Lib/UseElementClass';
import { computed, provide }         from 'vue';

const props = withDefaults(defineProps<MenuProps>(), {
    hideText:      false,
    textAsTooltip: false,
    orientation:   'vertical',
    size:          'default',
    isFlushed:     false,
});

provide(menuTextPropsInjectionKey, computed(() => (
    { hideText: props.hideText, textAsTooltip: props.textAsTooltip }
)));

const elementName: ElementName = 'menu';

const [
    orientationClass,
    sizeClass,
    flushClass,
] = [
    useOrientation(elementName, () => props.orientation),
    useSize(elementName, () => props.size),
    useClass(() => props.isFlushed, 'rounded-none p-0 [&_li>*]:rounded-none'),
];
</script>
