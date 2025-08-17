<template>
    <li :class="[
            disabledClass,
            menuTextProps.textAsTooltip && 'tooltip',
        ]"
        @mouseleave="showTooltip = false"
        @mouseover="showTooltip = true"
    >
        <template v-if="item.to !== undefined">
            <FoLink :to="item.to"
                    :exact-active-class="activeClass"
                    :navigation="navigation"
                    @click:link="emit('click:item')"
            >
                <FoIcon v-if="item.icon !== undefined"
                        :icon="item.icon"
                        size="small"
                />

                <template v-if="!menuTextProps.hideText && !menuTextProps.textAsTooltip">
                    <slot name="prepend" />

                    {{ item.text }}

                    <slot name="append" />
                </template>
            </FoLink>

            <span v-if="!menuTextProps.hideText && menuTextProps.textAsTooltip"
                  v-show="showTooltip"
                  ref="tooltip"
                  class="tooltip-content"
                  :class="[showTooltip && 'visible']"
                  role="tooltip"
            >
                <span class="tooltip-body">
                    {{ item.text }}
                </span>
            </span>
        </template>

        <slot />
    </li>
</template>

<script setup lang="ts">
import type { ComponentName }                                                 from '@/Lib';
import type { WithAddonSlots, WithDefaultSlot }                               from '@/Types';
import type { MenuItem }                                                      from '@/UI/Components';
import type { Navigation }                                                    from '@/UI/Content/Link';
import { useState }                                                           from '@/Lib/UseState/Internal';
import { isInMenuItemInjectionKey, menuTextPropsInjectionKey }                from '@/UI/Components/Menu/Internal';
import { FoLink }                                                             from '@/UI/Content/Link';
import { FoIcon }                                                             from '@/UI/Customization/Icon';
import { useMotion }                                                          from '@vueuse/motion';
import { computed, inject, provide, ref, useTemplateRef, watch, watchEffect } from 'vue';

interface Props {
    item:        MenuItem;
    navigation?: Navigation;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: 'click:item'): void;
}>();

defineSlots<WithDefaultSlot & WithAddonSlots>();

const componentName: ComponentName = 'FoMenuItem';

provide(isInMenuItemInjectionKey, true);

const menuTextProps = inject(menuTextPropsInjectionKey, computed(() => ({
    hideText:      false,
    textAsTooltip: false,
})));

const activeClass   = useState(componentName, 'active');
const disabledClass = useState(componentName, () => props.item.isDisabled ? 'disabled' : 'default');

const tooltipElement = useTemplateRef('tooltip');
const showTooltip    = ref<boolean>(false);

// todo: the position of the tooltip can be improved
const { apply: applyTooltipAnimation } = useMotion(tooltipElement, {
    initial: {
        opacity: 0,
        x:       30,
        y:       -45,
    },
    hovered: {
        opacity:    1,
        x:          30,
        y:          -45,
        transition: {
            duration: 0,
        },
    },
});

watch(showTooltip, (visible: boolean): void => {
    if (visible) {
        applyTooltipAnimation('hovered');

        return;
    }

    applyTooltipAnimation('initial');
});

watchEffect(() => {
    if (props.item.to !== undefined && props.item.icon === undefined && menuTextProps.value.hideText) {
        throw new Error(`The text ${props.item.text} is hidden but the icon is not specified.`);
    }
});
</script>
