<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoJoin"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api.ts';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultJoin                      from '@/Forms/Join/DefaultJoin.vue';
import DefaultJoinRaw                   from '@/Forms/Join/DefaultJoin.vue?raw';
import JoinIcon                         from '@/Forms/Join/JoinIcon.vue';
import JoinIconRaw                      from '@/Forms/Join/JoinIcon.vue?raw';
import PilledJoin                       from '@/Forms/Join/PilledJoin.vue';
import PilledJoinRaw                    from '@/Forms/Join/PilledJoin.vue?raw';
import ResponsiveJoin                   from '@/Forms/Join/ResponsiveJoin.vue';
import ResponsiveJoinRaw                from '@/Forms/Join/ResponsiveJoin.vue?raw';
import VerticalJoin                     from '@/Forms/Join/VerticalJoin.vue';
import VerticalJoinRaw                  from '@/Forms/Join/VerticalJoin.vue?raw';

type Section = Default | 'icon' | 'vertical' | 'responsive' | 'pilled' | ApiType;

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
                    codePreview: DefaultJoinRaw,
                    component:   DefaultJoin,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    codePreview: JoinIconRaw,
                    component:   JoinIcon,
                },
            },
        ],
        [
            'vertical',
            {
                vue: {
                    codePreview: VerticalJoinRaw,
                    component:   VerticalJoin,
                },
            },
        ],
        [
            'responsive',
            {
                vue: {
                    codePreview: ResponsiveJoinRaw,
                    component:   ResponsiveJoin,
                },
            },
        ],
        [
            'pilled',
            {
                vue: {
                    codePreview: PilledJoinRaw,
                    component:   PilledJoin,
                },
            },
        ],
    ]);
});
</script>
