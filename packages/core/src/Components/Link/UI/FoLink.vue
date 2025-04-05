<template>
    <FoRouterLink v-bind="$props"
                  :class="[
                      isInMenuItem === false && 'link',
                      colorClass,
                      underlineClass,
                  ]"
    >
        <slot />
    </FoRouterLink>
</template>

<script setup lang="ts">
import type { LinkProps, UnderlineLinkEffect } from '@/Components/Link/Types/Link';
import { FoRouterLink }                        from '@/Components/Link/Internal';
import { isInMenuItemInjectionKey }            from '@/Components/Menu/Internal';
import { useTextColor }                        from '@/Shared/Internal/Lib';
import { computed, inject }                    from 'vue';

const props = withDefaults(defineProps<LinkProps>(), {
    color: 'default',
});

const isInMenuItem = inject(isInMenuItemInjectionKey, false);

const [
    colorClass,
    underlineClass,
] = [
    useTextColor('link', () => props.color),
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
