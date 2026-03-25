<template>
    <!--    :id="id" todo -->
    <a v-if="navigation !== undefined && isStringLink(to)"
       :class="[navigation.activePath === to && exactActiveClass]"
       v-bind="$attrs"
       :href="to"
       @click.prevent="navigation.navigate(to); emit('click:link')"
    >
        <slot />
    </a>
    <!--    :id="id" todo -->
    <a v-else-if="useATag(to)"
       v-bind="$attrs"
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
           :class="[isActive && activeClass, isExactActive && exactActiveClass]"
           v-bind="$attrs"
           @click="navigate($event); emit('click:link')"
        >
            <slot />
        </a>
    </component>
</template>

<script setup lang="ts">
import type { FoRouterLinkProps } from '@/UI/Content/Link/Internal';
import type { To }                from '@/UI/Content/Link/Types/Link.ts';
import { RouterLink }             from 'vue-router';

defineOptions({
    inheritAttrs: false,
});

defineProps<FoRouterLinkProps>();

const emit = defineEmits<{
    (e: 'click:link'): void;
}>();

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
