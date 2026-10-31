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
import type { ComponentName, Orientation, Size } from '@/Lib';
import type { WithRequiredDefaultSlot }          from '@/Types';
import type { MenuProps }                        from '@/UI/Components';
import type { MenuTextProps }                    from '@/UI/Components/Menu/Types';
import { computed, provide }                     from 'vue';
import { useFlyonUIVueAppConfig }                from '@/Lib';
import { useClass }                              from '@/Lib/UseClass/Internal';
import { useOrientation }                        from '@/Lib/UseOrientation/Internal';
import { useSize }                               from '@/Lib/UseSize/Internal';
import { useRequiredSlotMessage }                from '@/Lib/Utils/Internal';
import { menuTextPropsInjectionKey }             from '@/UI/Components/Menu/Internal';

const props = withDefaults(defineProps<MenuProps>(), {
    hideText:      false,
    textAsTooltip: false,
    orientation:   'vertical',
    isFlushed:     false,
});

defineSlots<WithRequiredDefaultSlot>();

provide(menuTextPropsInjectionKey, computed((): MenuTextProps => (
    { hideText: props.hideText, textAsTooltip: props.textAsTooltip }
)));

const componentName: ComponentName = 'FoMenu';

const { config } = useFlyonUIVueAppConfig();

const [
    orientationClass,
    sizeClass,
    flushClass,
] = [
    useOrientation(componentName, (): Orientation => props.orientation),
    useSize(config, componentName, (): Size | undefined => props.size),
    useClass((): boolean => props.isFlushed, 'rounded-none p-0 [&_li>*]:rounded-none'),
];
</script>
