<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="[
                       'FoCard',
                       'FoCardActions',
                       'FoCardAlert',
                       'FoCardBody',
                       'FoCardFooter',
                       'FoCardGroup',
                       'FoCardHeader',
                       'FoCardTitle',
                   ]"
    />
</template>

<script setup lang="ts">
import type { Default }                        from 'flyonui-vue';
import type { FrameworkSectionPreview }        from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                        from '@/Api/Types/Api.ts';
import { computed }                            from 'vue';
import ComponentDocs                           from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BorderedCard                            from '@/Components/Card/BorderedCard.vue';
import BorderedCardRaw                         from '@/Components/Card/BorderedCard.vue?raw';
import CardGroup                               from '@/Components/Card/CardGroup.vue';
import CardGroupRaw                            from '@/Components/Card/CardGroup.vue?raw';
import CardSize                                from '@/Components/Card/CardSize.vue';
import CardSizeRaw                             from '@/Components/Card/CardSize.vue?raw';
import CardWithAlert                           from '@/Components/Card/CardWithAlert.vue';
import CardWithAlertRaw                        from '@/Components/Card/CardWithAlert.vue?raw';
import CardWithImage                           from '@/Components/Card/CardWithImage.vue';
import CardWithImageRaw                        from '@/Components/Card/CardWithImage.vue?raw';
import CardWithImageOverlay                    from '@/Components/Card/CardWithImageOverlay.vue';
import CardWithImageOverlayRaw                 from '@/Components/Card/CardWithImageOverlay.vue?raw';
import CardWithImageScalingAnimationOnHover    from '@/Components/Card/CardWithImageScalingAnimationOnHover.vue';
import CardWithImageScalingAnimationOnHoverRaw from '@/Components/Card/CardWithImageScalingAnimationOnHover.vue?raw';
import CardWithLinks                           from '@/Components/Card/CardWithLinks.vue';
import CardWithLinksRaw                        from '@/Components/Card/CardWithLinks.vue?raw';
import CardWithTranslateAnimationOnHover       from '@/Components/Card/CardWithTranslateAnimationOnHover.vue';
import CardWithTranslateAnimationOnHoverRaw    from '@/Components/Card/CardWithTranslateAnimationOnHover.vue?raw';
import DefaultCard                             from '@/Components/Card/DefaultCard.vue';
import DefaultCardRaw                          from '@/Components/Card/DefaultCard.vue?raw';
import EmptyCard                               from '@/Components/Card/EmptyCard.vue';
import EmptyCardRaw                            from '@/Components/Card/EmptyCard.vue?raw';
import GlassCard                               from '@/Components/Card/GlassCard.vue';
import GlassCardRaw                            from '@/Components/Card/GlassCard.vue?raw';
import HorizontalCard                          from '@/Components/Card/HorizontalCard.vue';
import HorizontalCardRaw                       from '@/Components/Card/HorizontalCard.vue?raw';
import ListGroupCard                           from '@/Components/Card/ListGroupCard.vue';
import ListGroupCardRaw                        from '@/Components/Card/ListGroupCard.vue?raw';
import OnlyBodyCard                            from '@/Components/Card/OnlyBodyCard.vue';
import OnlyBodyCardRaw                         from '@/Components/Card/OnlyBodyCard.vue?raw';
import StyleVariationCard                      from '@/Components/Card/StyleVariationCard.vue';
import StyleVariationCardRaw                   from '@/Components/Card/StyleVariationCard.vue?raw';
import TabsInCard                              from '@/Components/Card/TabsInCard.vue';
import TabsInCardRaw                           from '@/Components/Card/TabsInCard.vue?raw';
import TextAlignmentCard                       from '@/Components/Card/TextAlignmentCard.vue';
import TextAlignmentCardRaw                    from '@/Components/Card/TextAlignmentCard.vue?raw';

type Section = Default
    | 'size'
    | 'only-body'
    | 'with-image'
    | 'with-links'
    | 'list-group'
    | 'with-image-overlay'
    | 'glass'
    | 'horizontal'
    | 'group'
    | 'with-image-scaling-animation-on-hover'
    | 'with-translate-animation-on-hover'
    | 'tabs'
    | 'style-variation'
    | 'text-alignment'
    | 'bordered'
    | 'with-alert'
    | 'empty'
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
                    component:   DefaultCard,
                    codePreview: DefaultCardRaw,
                },
            },
        ],
        [
            'size',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   CardSize,
                    codePreview: CardSizeRaw,
                },
            },
        ],
        [
            'only-body',
            {
                vue: {
                    component:   OnlyBodyCard,
                    codePreview: OnlyBodyCardRaw,
                },
            },
        ],
        [
            'with-image',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   CardWithImage,
                    codePreview: CardWithImageRaw,
                },
            },
        ],
        [
            'with-links',
            {
                vue: {
                    component:   CardWithLinks,
                    codePreview: CardWithLinksRaw,
                },
            },
        ],
        [
            'list-group',
            {
                vue: {
                    component:   ListGroupCard,
                    codePreview: ListGroupCardRaw,
                },
            },
        ],
        [
            'with-image-overlay',
            {
                vue: {
                    component:   CardWithImageOverlay,
                    codePreview: CardWithImageOverlayRaw,
                },
            },
        ],
        [
            'glass',
            {
                vue: {
                    component:   GlassCard,
                    codePreview: GlassCardRaw,
                },
            },
        ],
        [
            'horizontal',
            {
                vue: {
                    component:   HorizontalCard,
                    codePreview: HorizontalCardRaw,
                },
            },
        ],
        [
            'group',
            {
                vue: {
                    component:   CardGroup,
                    codePreview: CardGroupRaw,
                },
            },
        ],
        [
            'with-image-scaling-animation-on-hover',
            {
                vue: {
                    component:   CardWithImageScalingAnimationOnHover,
                    codePreview: CardWithImageScalingAnimationOnHoverRaw,
                },
            },
        ],
        [
            'with-translate-animation-on-hover',
            {
                grid: { columns: 1, rows: 2 },
                vue:  {
                    component:   CardWithTranslateAnimationOnHover,
                    codePreview: CardWithTranslateAnimationOnHoverRaw,
                },
            },
        ],
        [
            'tabs',
            {
                vue: {
                    component:   TabsInCard,
                    codePreview: TabsInCardRaw,
                },
            },
        ],
        [
            'style-variation',
            {
                vue: {
                    component:   StyleVariationCard,
                    codePreview: StyleVariationCardRaw,
                },
            },
        ],
        [
            'text-alignment',
            {
                vue: {
                    component:   TextAlignmentCard,
                    codePreview: TextAlignmentCardRaw,
                },
            },
        ],
        [
            'bordered',
            {
                vue: {
                    component:   BorderedCard,
                    codePreview: BorderedCardRaw,
                },
            },
        ],
        [
            'with-alert',
            {
                vue: {
                    component:   CardWithAlert,
                    codePreview: CardWithAlertRaw,
                },
            },
        ],
        [
            'empty',
            {
                vue: {
                    component:   EmptyCard,
                    codePreview: EmptyCardRaw,
                },
            },
        ],
    ]);
});
</script>
