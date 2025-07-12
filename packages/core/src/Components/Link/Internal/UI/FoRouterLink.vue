<template>
    <a v-if="navigation !== undefined && isStringLink(to)"
       :class="[$attrs?.class, navigation.activePath === to && exactActiveClass]"
       :href="to"
       @click.prevent=" navigation.navigate(to);"
    >
        <slot />
    </a>

    <a v-else-if="useATag(to)"
       :class="$attrs?.class"
       :href="to"
       :target="isExternalLink(to) ? '_blank' : undefined"
       :rel="isExternalLink(to) ? 'noopener, noreferrer' : undefined"
    >
        <slot />
    </a>

    <component :is="RouterLink"
               v-else
               v-slot="{ isActive, isExactActive, href, navigate }"
               v-bind="$props"
               custom
    >
        <a :href="href"
           :class="[$attrs?.class, isActive && activeClass, isExactActive && exactActiveClass]"
           @click="navigate"
        >
            <slot />
        </a>
    </component>
</template>

<script setup lang="ts">
import type { FoRouterLinkProps } from '@/Components/Link/Internal';
import type { To }                from '@/Components/Link/Types/Link';
import { RouterLink }             from 'vue-router';

defineOptions({
    inheritAttrs: false,
});

defineProps<FoRouterLinkProps>();

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
