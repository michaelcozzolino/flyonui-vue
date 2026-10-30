<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoBrowser', 'FoBrowserToolbarURL']"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BorderedBrowser                  from '@/Mockups/Browser/BorderedBrowser.vue';
import BorderedBrowserRaw               from '@/Mockups/Browser/BorderedBrowser.vue?raw';
import BrowserBackgroundColor           from '@/Mockups/Browser/BrowserBackgroundColor.vue';
import BrowserBackgroundColorRaw        from '@/Mockups/Browser/BrowserBackgroundColor.vue?raw';
import BrowserWithImage                 from '@/Mockups/Browser/BrowserWithImage.vue';
import BrowserWithImageRaw              from '@/Mockups/Browser/BrowserWithImage.vue?raw';

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
                    component:   BorderedBrowser,
                    codePreview: BorderedBrowserRaw,
                },
            },
        ],
        [
            'background-color',
            {
                vue: {
                    component:   BrowserBackgroundColor,
                    codePreview: BrowserBackgroundColorRaw,
                },
            },
        ],
        [
            'with-image',
            {
                vue: {
                    component:   BrowserWithImage,
                    codePreview: BrowserWithImageRaw,
                },
            },
        ],
    ]);
});
</script>
