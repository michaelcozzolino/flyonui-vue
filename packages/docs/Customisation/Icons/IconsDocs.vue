<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoIcon"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api.ts';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomIcon                       from '@/Customisation/Icons/CustomIcon.vue';
import CustomIconRaw                    from '@/Customisation/Icons/CustomIcon.vue?raw';
import IconifyIcon                      from '@/Customisation/Icons/IconifyIcon.vue';
import IconifyIconRaw                   from '@/Customisation/Icons/IconifyIcon.vue?raw';
import IconSize                         from '@/Customisation/Icons/IconSize.vue';
import IconSizeRaw                      from '@/Customisation/Icons/IconSize.vue?raw';
import SvgIconRaw                       from '@/Customisation/Icons/SvgIcon.vue?raw';

type Section = 'iconify' | 'custom' | 'size' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'iconify',
            {
                vue: {
                    codePreview: IconifyIconRaw,
                    component:   IconifyIcon,
                },
                excludeFromTests: true,
            },
        ],
        [
            'custom',
            {
                vue: {
                    codePreview: [
                        { code: CustomIconRaw, language: 'js' },
                        { title: 'SvgIcon.vue', code: SvgIconRaw, language: 'js' },
                    ],
                    component: CustomIcon,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: IconSizeRaw,
                    component:   IconSize,
                },
            },
        ],
    ]);
});
</script>
