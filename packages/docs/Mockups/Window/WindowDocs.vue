<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoWindow"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BorderedWindow                   from '@/Mockups/Window/BorderedWindow.vue';
import BorderedWindowRaw                from '@/Mockups/Window/BorderedWindow.vue?raw';
import WindowBackgroundColor            from '@/Mockups/Window/WindowBackgroundColor.vue';
import WindowBackgroundColorRaw         from '@/Mockups/Window/WindowBackgroundColor.vue?raw';
import WindowWithImage                  from '@/Mockups/Window/WindowWithImage.vue';
import WindowWithImageRaw               from '@/Mockups/Window/WindowWithImage.vue?raw';

type Section = 'bordered'
    | 'background-color'
    | 'with-image';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'bordered',
            {
                vue: {
                    component:   BorderedWindow,
                    codePreview: BorderedWindowRaw,
                },
            },
        ],
        [
            'background-color',
            {
                vue: {
                    component:   WindowBackgroundColor,
                    codePreview: WindowBackgroundColorRaw,
                },
            },
        ],
        [
            'with-image',
            {
                vue: {
                    component:   WindowWithImage,
                    codePreview: WindowWithImageRaw,
                },
            },
        ],
    ]);
});
</script>
