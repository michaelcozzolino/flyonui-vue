<template>
    <FoRouterLink v-bind="$props"
                  class="link"
                  :class="[colorClass, underlineClass]"
    >
        <slot />
    </FoRouterLink>
</template>

<script setup lang="ts">
import type { LinkProps, UnderlineLinkEffect } from '@/Components/Link/Types/Link';
import { FoRouterLink }                        from '@/Components/Link/Internal';
import { useColor }                            from '@/Shared/Internal/Lib';
import { computed }                            from 'vue';

const props = withDefaults(defineProps<LinkProps>(), {
    color: 'default',
});

const [
    colorClass,
    underlineClass,
] = [
    useColor('link', () => props.color),
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
