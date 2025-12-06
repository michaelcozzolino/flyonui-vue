<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultNavbar                 from '@/Navigations/Navbar/DefaultNavbar.vue';
import DefaultNavbarRaw              from '@/Navigations/Navbar/DefaultNavbar.vue?raw';
import NavbarWithLogo                from '@/Navigations/Navbar/NavbarWithLogo.vue';
import NavbarWithLogoRaw             from '@/Navigations/Navbar/NavbarWithLogo.vue?raw';
import { computed }                  from 'vue';

type Section = 'default' | 'with-logo';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultNavbarRaw,
                component: DefaultNavbar,
            },
        ],
        [
            'with-logo',
            {
                code:      NavbarWithLogoRaw,
                component: NavbarWithLogo,
            },
        ],
    ]);
});
</script>
