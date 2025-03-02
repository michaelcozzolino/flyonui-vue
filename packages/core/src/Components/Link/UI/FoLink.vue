<template>
    <FoRouterLink v-bind="$props"
                  class="link"
                  :class="[colorClass, underlineClass]"
    >
        <slot />
    </FoRouterLink>
</template>

<script setup lang="ts">
import type { LinkProps } from '@/Components/Link/Types/Link';
import FoRouterLink       from '@/Components/Link/UI/FoRouterLink.vue';
import { useColor }       from '@/Shared/Lib/UseElementClass';
import { computed }       from 'vue';

const props = withDefaults(defineProps<LinkProps>(), {
    color: 'default',
});

const [
    colorClass,
    underlineClass,
] = [
    useColor('link', () => props.color),
    computed(() => props.underlineEffect && (props.underlineEffect === 'hover' ? 'link-hover' : 'link-animated')),
];
</script>
