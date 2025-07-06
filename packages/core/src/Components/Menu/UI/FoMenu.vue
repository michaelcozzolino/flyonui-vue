<template>
    <ul class="menu"
        :class="[orientationClass, sizeClass, flushClass]"
    >
        <slot>
            {{ useRequiredSlotMessage(componentName) }}
        </slot>
    </ul>
</template>

<script setup lang="ts">
import type { MenuProps }            from '@/Components/Menu';
import type { ComponentName }        from '@/Shared/Utils/Internal';
import type { VNode }                from 'vue';
import { menuTextPropsInjectionKey } from '@/Components/Menu/Internal';
import { useClass }                  from '@/Shared/UseClass/Internal';
import { useFlyonUIVueAppConfig }    from '@/Shared/UseFlyonUIVueAppConfig';
import { useOrientation }            from '@/Shared/UseOrientation/Internal';
import { useSize }                   from '@/Shared/UseSize/Internal';
import { useRequiredSlotMessage }    from '@/Shared/Utils/Internal';
import { computed, provide }         from 'vue';

const props = withDefaults(defineProps<MenuProps>(), {
    hideText:      false,
    textAsTooltip: false,
    orientation:   'vertical',
    isFlushed:     false,
});

defineSlots<{
    default: () => VNode[];
}>();

provide(menuTextPropsInjectionKey, computed(() => (
    { hideText: props.hideText, textAsTooltip: props.textAsTooltip }
)));

const componentName: ComponentName = 'FoMenu';

const { config } = useFlyonUIVueAppConfig();

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
