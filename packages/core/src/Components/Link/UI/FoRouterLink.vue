<template>
    <a v-if="useATag(to)"
       v-bind="$attrs"
       :href="to"
       :target="isExternalLink(to) ? '_blank' : undefined"
       :rel="isExternalLink(to) ? 'noopener, noreferrer' : undefined"
    >
        <slot />
    </a>

    <RouterLink v-else
                v-slot="{ isActive, isExactActive, href, navigate }"
                v-bind="$props"
                custom
    >
        <a v-bind="$attrs"
           :href="href"
           :class="[isActive && activeClass, isExactActive && exactActiveClass]"
           @click="navigate"
        >
            <slot />
        </a>
    </RouterLink>
</template>

<script setup lang="ts">
import type { FoRouterLinkProps, To } from '@/Components/Link/Types/Link';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<FoRouterLinkProps>();

function isStringLink(to: To): to is string {
    return typeof to === 'string';
}

function isExternalLink(to: To): to is string {
    return isStringLink(to) && (to.startsWith('http') || to.startsWith('www.'));
}

function useATag(to: To): to is string {
    return (isStringLink(to) && to.startsWith('#')) || isExternalLink(to);
}
</script>
