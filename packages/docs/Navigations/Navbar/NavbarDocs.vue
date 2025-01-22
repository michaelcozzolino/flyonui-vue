<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultNavbarRaw"
                 :component="DefaultNavbar"
    />

    <CodeSnippet v-else-if="section === 'with-logo'"
                 :code="NavbarWithLogoRaw"
                 :component="NavbarWithLogo"
    />
</template>

<script setup lang="ts">
import CodeSnippet       from '../../.vitepress/theme/Components/CodeSnippet.vue';
import DefaultNavbar     from './DefaultNavbar.vue';
import DefaultNavbarRaw  from './DefaultNavbar.vue?raw';
import NavbarWithLogo    from './NavbarWithLogo.vue';
import NavbarWithLogoRaw from './NavbarWithLogo.vue?raw';

interface Props {
    section: 'default' | 'with-logo';
}

defineProps<Props>();
</script>
