<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoBlockQuote"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BlockQuoteAlignment           from '@/Next/Content/BlockQuote/BlockQuoteAlignment.vue';
import BlockQuoteAlignmentRaw        from '@/Next/Content/BlockQuote/BlockQuoteAlignment.vue?raw';
import DefaultBlockQuote             from '@/Next/Content/BlockQuote/DefaultBlockQuote.vue';
import DefaultBlockQuoteRaw          from '@/Next/Content/BlockQuote/DefaultBlockQuote.vue?raw';
import NamedBlockQuote               from '@/Next/Content/BlockQuote/NamedBlockQuote.vue';
import NamedBlockQuoteRaw            from '@/Next/Content/BlockQuote/NamedBlockQuote.vue?raw';
import NamedBlockQuoteWithAvatar     from '@/Next/Content/BlockQuote/NamedBlockQuoteWithAvatar.vue';
import NamedBlockQuoteWithAvatarRaw  from '@/Next/Content/BlockQuote/NamedBlockQuoteWithAvatar.vue?raw';
import { computed }                  from 'vue';

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
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultBlockQuoteRaw,
                component: DefaultBlockQuote,
            },
        ],
        [
            'alignment',
            {
                code:      BlockQuoteAlignmentRaw,
                component: BlockQuoteAlignment,
            },
        ],
        [
            'named',
            {
                code:      NamedBlockQuoteRaw,
                component: NamedBlockQuote,
            },
        ],
        [
            'named-with-avatar',
            {
                code:      NamedBlockQuoteWithAvatarRaw,
                component: NamedBlockQuoteWithAvatar,
            },
        ],
    ]);
});
</script>
