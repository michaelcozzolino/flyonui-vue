<template>
    <a v-if="isExternalLink(to)"
       v-bind="$attrs"
       :href="to"
       target="_blank"
       rel="noopener, noreferrer"
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
import { RouterLink }                 from 'vue-router';

defineOptions({
    inheritAttrs: false,
});

defineProps<FoRouterLinkProps>();

function isExternalLink(to: To): to is string {
    return typeof to === 'string' && (to.startsWith('http') || to.startsWith('www'));
}
</script>
