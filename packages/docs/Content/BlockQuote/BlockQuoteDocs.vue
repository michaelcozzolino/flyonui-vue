<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoBlockQuote"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BlockQuoteAlignment              from '@/Content/BlockQuote/BlockQuoteAlignment.vue';
import BlockQuoteAlignmentRaw           from '@/Content/BlockQuote/BlockQuoteAlignment.vue?raw';
import DefaultBlockQuote                from '@/Content/BlockQuote/DefaultBlockQuote.vue';
import DefaultBlockQuoteRaw             from '@/Content/BlockQuote/DefaultBlockQuote.vue?raw';
import NamedBlockQuote                  from '@/Content/BlockQuote/NamedBlockQuote.vue';
import NamedBlockQuoteRaw               from '@/Content/BlockQuote/NamedBlockQuote.vue?raw';
import NamedBlockQuoteWithAvatar        from '@/Content/BlockQuote/NamedBlockQuoteWithAvatar.vue';
import NamedBlockQuoteWithAvatarRaw     from '@/Content/BlockQuote/NamedBlockQuoteWithAvatar.vue?raw';

type Section = Default
    | 'alignment'
    | 'named'
    | 'named-with-avatar'
    | ApiType;

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
                    codePreview: DefaultBlockQuoteRaw,
                    component:   DefaultBlockQuote,
                },
            },
        ],
        [
            'alignment',
            {
                vue: {
                    codePreview: BlockQuoteAlignmentRaw,
                    component:   BlockQuoteAlignment,
                },
            },
        ],
        [
            'named',
            {
                vue: {
                    codePreview: NamedBlockQuoteRaw,
                    component:   NamedBlockQuote,
                },
            },
        ],
        [
            'named-with-avatar',
            {
                vue: {
                    codePreview: NamedBlockQuoteWithAvatarRaw,
                    component:   NamedBlockQuoteWithAvatar,
                },
            },
        ],
    ]);
});
</script>
