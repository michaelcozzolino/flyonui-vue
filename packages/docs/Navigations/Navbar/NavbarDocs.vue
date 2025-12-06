<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultNavbarRaw"
                      :component="DefaultNavbar"
    />

    <ComponentPreview v-else-if="section === 'with-logo'"
                      :data-test-screenshot="section"
                      :code="NavbarWithLogoRaw"
                      :component="NavbarWithLogo"
    />
</template>

<script setup lang="ts">
import ComponentPreview  from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import DefaultNavbar     from '@/Navigations/Navbar/DefaultNavbar.vue';
import DefaultNavbarRaw  from '@/Navigations/Navbar/DefaultNavbar.vue?raw';
import NavbarWithLogo    from '@/Navigations/Navbar/NavbarWithLogo.vue';
import NavbarWithLogoRaw from '@/Navigations/Navbar/NavbarWithLogo.vue?raw';

interface Props {
    section: 'default' | 'with-logo';
}

defineProps<Props>();
</script>
