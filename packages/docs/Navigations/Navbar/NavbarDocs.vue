<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultNavbar                    from '@/Navigations/Navbar/DefaultNavbar.vue';
import DefaultNavbarRaw                 from '@/Navigations/Navbar/DefaultNavbar.vue?raw';
import NavbarWithLogo                   from '@/Navigations/Navbar/NavbarWithLogo.vue';
import NavbarWithLogoRaw                from '@/Navigations/Navbar/NavbarWithLogo.vue?raw';

type Section = 'default' | 'with-logo';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultNavbarRaw,
                    component:   DefaultNavbar,
                },
            },
        ],
        [
            'with-logo',
            {
                vue: {
                    codePreview: NavbarWithLogoRaw,
                    component:   NavbarWithLogo,
                },
            },
        ],
    ]);
});
</script>
