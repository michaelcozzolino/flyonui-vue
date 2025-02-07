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
import CodeSnippet       from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultNavbar     from '@/Navigations/Navbar/DefaultNavbar.vue';
import DefaultNavbarRaw  from '@/Navigations/Navbar/DefaultNavbar.vue?raw';
import NavbarWithLogo    from '@/Navigations/Navbar/NavbarWithLogo.vue';
import NavbarWithLogoRaw from '@/Navigations/Navbar/NavbarWithLogo.vue?raw';

interface Props {
    section: 'default' | 'with-logo';
}

defineProps<Props>();
</script>
