<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoLink"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AnimatedUnderlineLink            from '@/Content/Link/AnimatedUnderlineLink.vue';
import AnimatedUnderlineLinkRaw         from '@/Content/Link/AnimatedUnderlineLink.vue?raw';
import DefaultLink                      from '@/Content/Link/DefaultLink.vue';
import DefaultLinkRaw                   from '@/Content/Link/DefaultLink.vue?raw';
import LinkColor                        from '@/Content/Link/LinkColor.vue';
import LinkColorRaw                     from '@/Content/Link/LinkColor.vue?raw';
import UnderlineOnHoverLink             from '@/Content/Link/UnderlineOnHoverLink.vue';
import UnderlineOnHoverLinkRaw          from '@/Content/Link/UnderlineOnHoverLink.vue?raw';

type Section = 'default' | 'underline-on-hover' | 'animated-underline' | 'color' | ApiType;

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
                    codePreview: DefaultLinkRaw,
                    component:   DefaultLink,
                },
            },
        ],
        [
            'underline-on-hover',
            {
                vue: {
                    codePreview: UnderlineOnHoverLinkRaw,
                    component:   UnderlineOnHoverLink,
                },
            },
        ],
        [
            'animated-underline',
            {
                vue: {
                    codePreview: AnimatedUnderlineLinkRaw,
                    component:   AnimatedUnderlineLink,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: LinkColorRaw,
                    component:   LinkColor,
                },
            },
        ],
    ]);
});
</script>
