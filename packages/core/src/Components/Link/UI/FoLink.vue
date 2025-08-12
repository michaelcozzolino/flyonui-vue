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
import type { LinkProps, UnderlineLinkEffect } from '@/Components/Link';
import type { WithRequiredDefaultSlot }        from '@/Shared/Utils/Types/Slots.ts';
import { FoRouterLink }                        from '@/Components/Link/Internal';
import { isInMenuItemInjectionKey }            from '@/Components/Menu/Internal';
import { useTextColor }                        from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }              from '@/Shared/UseFlyonUIVueAppConfig';
import { useRequiredSlotMessage }              from '@/Shared/Utils/Internal';
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
