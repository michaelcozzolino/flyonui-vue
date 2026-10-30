<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoCode"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CodeColor                        from '@/Mockups/Code/CodeColor.vue';
import CodeColorRaw                     from '@/Mockups/Code/CodeColor.vue?raw';
import CodeWithLinePrefix               from '@/Mockups/Code/CodeWithLinePrefix.vue';
import CodeWithLinePrefixRaw            from '@/Mockups/Code/CodeWithLinePrefix.vue?raw';
import CodeWithoutLinePrefix            from '@/Mockups/Code/CodeWithoutLinePrefix.vue';
import CodeWithoutLinePrefixRaw         from '@/Mockups/Code/CodeWithoutLinePrefix.vue?raw';
import HighlightedLineCode              from '@/Mockups/Code/HighlightedLineCode.vue';
import HighlightedLineCodeRaw           from '@/Mockups/Code/HighlightedLineCode.vue?raw';
import MultiLineCode                    from '@/Mockups/Code/MultiLineCode.vue';
import MultiLineCodeRaw                 from '@/Mockups/Code/MultiLineCode.vue?raw';
import ScrollableCode                   from '@/Mockups/Code/ScrollableCode.vue';
import ScrollableCodeRaw                from '@/Mockups/Code/ScrollableCode.vue?raw';

type Section = 'with-line-prefix'
    | 'multi-line'
    | 'highlighted-line'
    | 'scrollable'
    | 'without-line-prefix'
    | 'color';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'with-line-prefix',
            {
                vue: {
                    component:   CodeWithLinePrefix,
                    codePreview: CodeWithLinePrefixRaw,
                },
            },
        ],
        [
            'multi-line',
            {
                vue: {
                    component:   MultiLineCode,
                    codePreview: MultiLineCodeRaw,
                },
            },
        ],
        [
            'highlighted-line',
            {
                vue: {
                    component:   HighlightedLineCode,
                    codePreview: HighlightedLineCodeRaw,
                },
            },
        ],
        [
            'scrollable',
            {
                vue: {
                    component:   ScrollableCode,
                    codePreview: ScrollableCodeRaw,
                },
            },
        ],
        [
            'without-line-prefix',
            {
                vue: {
                    component:   CodeWithoutLinePrefix,
                    codePreview: CodeWithoutLinePrefixRaw,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    component:   CodeColor,
                    codePreview: CodeColorRaw,
                },
            },
        ],
    ]);
});
</script>
