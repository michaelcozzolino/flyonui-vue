<template>
    <FoRouterLink v-bind="$props"
                  :class="[
                      isInMenuItem === false && 'link',
                      colorClass,
                      underlineClass,
                  ]"
                  @click:link="emit('click:link')"
    >
        <slot>
            {{ useRequiredSlotMessage('FoLink') }}
        </slot>
    </FoRouterLink>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot }        from '@/Types';
import type { LinkProps, UnderlineLinkEffect } from '@/UI/Content/Link';
import { useFlyonUIVueAppConfig }              from '@/Lib';
import { useTextColor }                        from '@/Lib/UseColor/Internal';
import { useRequiredSlotMessage }              from '@/Lib/Utils/Internal';
import { isInMenuItemInjectionKey }            from '@/UI/Components/Menu/Internal';
import { FoRouterLink }                        from '@/UI/Content/Link/Internal';
import { computed, inject }                    from 'vue';

const props = defineProps<LinkProps>();

const emit = defineEmits<{
    (e: 'click:link'): void;
}>();

defineSlots<WithRequiredDefaultSlot>();

const { config } = useFlyonUIVueAppConfig();

const isInMenuItem = inject(isInMenuItemInjectionKey, false);

const [
    colorClass,
    underlineClass,
] = [
    useTextColor(config, 'FoLink', () => props.color),
    computed(() => {
        if (props.underlineEffect === undefined) {
            return '';
        }

        const underlineEffects: Record<UnderlineLinkEffect, string> = {
            'hover':          'link-hover',
            'hover-animated': 'link-animated',
            'no-underline':   'no-underline',
        };

        return underlineEffects[props.underlineEffect];
    }),
];
</script>
