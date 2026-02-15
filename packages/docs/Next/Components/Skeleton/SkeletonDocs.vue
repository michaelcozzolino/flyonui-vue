<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoSkeleton"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }   from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                from '@/Api/Types/Api.ts';
import type { Default }                from 'flyonui-vue';
import ComponentDocs                   from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CircleWithContentSkeleton       from '@/Next/Components/Skeleton/CircleWithContentSkeleton.vue';
import CircleWithContentSkeletonRaw    from '@/Next/Components/Skeleton/CircleWithContentSkeleton.vue?raw';
import DefaultSkeleton                 from '@/Next/Components/Skeleton/DefaultSkeleton.vue';
import DefaultSkeletonRaw              from '@/Next/Components/Skeleton/DefaultSkeleton.vue?raw';
import RectangleWithContentSkeleton    from '@/Next/Components/Skeleton/RectangleWithContentSkeleton.vue';
import RectangleWithContentSkeletonRaw from '@/Next/Components/Skeleton/RectangleWithContentSkeleton.vue?raw';
import SkeletonAnimation               from '@/Next/Components/Skeleton/SkeletonAnimation.vue';
import SkeletonAnimationRaw            from '@/Next/Components/Skeleton/SkeletonAnimation.vue?raw';
import StripedSkeleton                 from '@/Next/Components/Skeleton/StripedSkeleton.vue';
import StripedSkeletonRaw              from '@/Next/Components/Skeleton/StripedSkeleton.vue?raw';
import { computed }                    from 'vue';

type Section = Default
    | 'animation'
    | 'striped'
    | 'circle-with-content'
    | 'rectangle-with-content'
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
                code:      DefaultSkeletonRaw,
                component: DefaultSkeleton,
            },
        ],
        [
            'animation',
            {
                code:      SkeletonAnimationRaw,
                component: SkeletonAnimation,
                grid:      { columns: 3, rows: 3 },
            },
        ],
        [
            'striped',
            {
                code:      StripedSkeletonRaw,
                component: StripedSkeleton,
            },
        ],
        [
            'circle-with-content',
            {
                code:      CircleWithContentSkeletonRaw,
                component: CircleWithContentSkeleton,
            },
        ],
        [
            'rectangle-with-content',
            {
                code:      RectangleWithContentSkeletonRaw,
                component: RectangleWithContentSkeleton,
            },
        ],
    ]);
});
</script>
