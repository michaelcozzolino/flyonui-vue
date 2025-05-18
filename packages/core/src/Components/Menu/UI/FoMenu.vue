<template>
    <ul class="menu"
        :class="[orientationClass, sizeClass, flushClass]"
    >
        <slot />
    </ul>
</template>

<script setup lang="ts">
import type { MenuProps }            from '@/Components/Menu';
import type { ComponentName }        from '@/Shared/Types/ComponentTypes';
import { menuTextPropsInjectionKey } from '@/Components/Menu/Internal';
import { injectFlyonUIVueAppConfig } from '@/Configuration/CreateFlyonUIVueApp';
import { useClass }                  from '@/Shared/Internal/Lib';
import { useOrientation }            from '@/Shared/UseOrientation/Internal';
import { useSize }                   from '@/Shared/UseSize/Internal/Lib';
import { computed, provide }         from 'vue';

const props = withDefaults(defineProps<MenuProps>(), {
    hideText:      false,
    textAsTooltip: false,
    orientation:   'vertical',
    isFlushed:     false,
});

provide(menuTextPropsInjectionKey, computed(() => (
    { hideText: props.hideText, textAsTooltip: props.textAsTooltip }
)));

const componentName: ComponentName = 'FoMenu';

const config = injectFlyonUIVueAppConfig();

const [
    orientationClass,
    sizeClass,
    flushClass,
] = [
    useOrientation(componentName, () => props.orientation),
    useSize(config, componentName, () => props.size),
    useClass(() => props.isFlushed, 'rounded-none p-0 [&_li>*]:rounded-none'),
];
</script>
