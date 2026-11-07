<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoRating"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultRating                    from '@/Miscellaneous/Rating/DefaultRating.vue';
import DefaultRatingRaw                 from '@/Miscellaneous/Rating/DefaultRating.vue?raw';
import DisabledRating                   from '@/Miscellaneous/Rating/DisabledRating.vue';
import DisabledRatingRaw                from '@/Miscellaneous/Rating/DisabledRating.vue?raw';
import HalfRating                       from '@/Miscellaneous/Rating/HalfRating.vue';
import HalfRatingRaw                    from '@/Miscellaneous/Rating/HalfRating.vue?raw';
import MaxRating                        from '@/Miscellaneous/Rating/MaxRating.vue';
import MaxRatingRaw                     from '@/Miscellaneous/Rating/MaxRating.vue?raw';
import RatingIcon                       from '@/Miscellaneous/Rating/RatingIcon.vue';
import RatingIconRaw                    from '@/Miscellaneous/Rating/RatingIcon.vue?raw';
import RatingSize                       from '@/Miscellaneous/Rating/RatingSize.vue';
import RatingSizeRaw                    from '@/Miscellaneous/Rating/RatingSize.vue?raw';

type Section = Default
    | 'disabled'
    | 'icon'
    | 'half'
    | 'size'
    | 'max'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    component:   DefaultRating,
                    codePreview: DefaultRatingRaw,
                },
            },
        ],
        [
            'disabled',
            {
                vue: {
                    component:   DisabledRating,
                    codePreview: DisabledRatingRaw,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    component:   RatingIcon,
                    codePreview: RatingIconRaw,
                },
            },
        ],
        [
            'half',
            {
                vue: {
                    component:   HalfRating,
                    codePreview: HalfRatingRaw,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    component:   RatingSize,
                    codePreview: RatingSizeRaw,
                },
            },
        ],
        [
            'max',
            {
                vue: {
                    component:   MaxRating,
                    codePreview: MaxRatingRaw,
                },
            },
        ],
    ]);
});
</script>
