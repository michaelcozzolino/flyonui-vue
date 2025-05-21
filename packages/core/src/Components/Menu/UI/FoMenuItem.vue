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
            >
                <FoIcon v-if="item.icon !== undefined"
                        :icon="item.icon"
                        size="extraLarge"
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
import type { MenuItem }                                                      from '@/Components/Menu';
import type { ComponentName }                                                 from '@/Shared/Utils/Internal';
import { FoIcon }                                                             from '@/Components/Icon';
import { FoLink }                                                             from '@/Components/Link';
import { isInMenuItemInjectionKey, menuTextPropsInjectionKey }                from '@/Components/Menu/Internal';
import { useState }                                                           from '@/Shared/UseState/Internal';
import { useMotion }                                                          from '@vueuse/motion';
import { computed, inject, provide, ref, useTemplateRef, watch, watchEffect } from 'vue';

interface Props {
    item: MenuItem;
}

const props = defineProps<Props>();

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
    if (props.item.icon === undefined && menuTextProps.value.hideText) {
        throw new Error(`The text ${props.item.text} is hidden but the icon is not specified.`);
    }
});
</script>
