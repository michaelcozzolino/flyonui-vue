<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoLink"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AnimatedUnderlineLink         from '@/Content/Link/AnimatedUnderlineLink.vue';
import AnimatedUnderlineLinkRaw      from '@/Content/Link/AnimatedUnderlineLink.vue?raw';
import DefaultLink                   from '@/Content/Link/DefaultLink.vue';
import DefaultLinkRaw                from '@/Content/Link/DefaultLink.vue?raw';
import LinkColor                     from '@/Content/Link/LinkColor.vue';
import LinkColorRaw                  from '@/Content/Link/LinkColor.vue?raw';
import UnderlineOnHoverLink          from '@/Content/Link/UnderlineOnHoverLink.vue';
import UnderlineOnHoverLinkRaw       from '@/Content/Link/UnderlineOnHoverLink.vue?raw';
import { computed }                  from 'vue';

type Section = 'default' | 'underline-on-hover' | 'animated-underline' | 'color' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultLinkRaw,
                component: DefaultLink,
            },
        ],
        [
            'underline-on-hover',
            {
                code:      UnderlineOnHoverLinkRaw,
                component: UnderlineOnHoverLink,
            },
        ],
        [
            'animated-underline',
            {
                code:      AnimatedUnderlineLinkRaw,
                component: AnimatedUnderlineLink,
            },
        ],
        [
            'color',
            {
                code:      LinkColorRaw,
                component: LinkColor,
            },
        ],
    ]);
});
</script>
