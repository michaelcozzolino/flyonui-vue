<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoSkeleton"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api.ts';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CircleWithContentSkeleton        from '@/Components/Skeleton/CircleWithContentSkeleton.vue';
import CircleWithContentSkeletonRaw     from '@/Components/Skeleton/CircleWithContentSkeleton.vue?raw';
import DefaultSkeleton                  from '@/Components/Skeleton/DefaultSkeleton.vue';
import DefaultSkeletonRaw               from '@/Components/Skeleton/DefaultSkeleton.vue?raw';
import RectangleWithContentSkeleton     from '@/Components/Skeleton/RectangleWithContentSkeleton.vue';
import RectangleWithContentSkeletonRaw  from '@/Components/Skeleton/RectangleWithContentSkeleton.vue?raw';
import SkeletonAnimation                from '@/Components/Skeleton/SkeletonAnimation.vue';
import SkeletonAnimationRaw             from '@/Components/Skeleton/SkeletonAnimation.vue?raw';
import StripedSkeleton                  from '@/Components/Skeleton/StripedSkeleton.vue';
import StripedSkeletonRaw               from '@/Components/Skeleton/StripedSkeleton.vue?raw';

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
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultSkeletonRaw,
                    component:   DefaultSkeleton,
                },
            },
        ],
        [
            'animation',
            {
                vue: {
                    codePreview: SkeletonAnimationRaw,
                    component:   SkeletonAnimation,
                },
                grid: { columns: 3, rows: 3 },
            },
        ],
        [
            'striped',
            {
                vue: {
                    codePreview: StripedSkeletonRaw,
                    component:   StripedSkeleton,
                },
            },
        ],
        [
            'circle-with-content',
            {
                vue: {
                    codePreview: CircleWithContentSkeletonRaw,
                    component:   CircleWithContentSkeleton,
                },
            },
        ],
        [
            'rectangle-with-content',
            {
                vue: {
                    codePreview: RectangleWithContentSkeletonRaw,
                    component:   RectangleWithContentSkeleton,
                },
            },
        ],
    ]);
});
</script>
