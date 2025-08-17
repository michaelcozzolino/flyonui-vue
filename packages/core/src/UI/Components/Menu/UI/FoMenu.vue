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
import type { ComponentName }           from '@/Lib';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { MenuProps }               from '@/UI/Components';
import { useFlyonUIVueAppConfig }       from '@/Lib';
import { useClass }                     from '@/Lib/UseClass/Internal';
import { useOrientation }               from '@/Lib/UseOrientation/Internal';
import { useSize }                      from '@/Lib/UseSize/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { menuTextPropsInjectionKey }    from '@/UI/Components/Menu/Internal';
import { computed, provide }            from 'vue';

const props = withDefaults(defineProps<MenuProps>(), {
    hideText:      false,
    textAsTooltip: false,
    orientation:   'vertical',
    isFlushed:     false,
});

defineSlots<WithRequiredDefaultSlot>();

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
