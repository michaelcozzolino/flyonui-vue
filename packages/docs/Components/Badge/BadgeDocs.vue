<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoBadge', 'FoDotStyleBadge']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BadgeChip                     from '@/Components/Badge/BadgeChip.vue';
import BadgeChipRaw                  from '@/Components/Badge/BadgeChip.vue?raw';
import BadgeInAButton                from '@/Components/Badge/BadgeInAButton.vue';
import BadgeInAButtonRaw             from '@/Components/Badge/BadgeInAButton.vue?raw';
import BadgeSize                     from '@/Components/Badge/BadgeSize.vue';
import BadgeSizeRaw                  from '@/Components/Badge/BadgeSize.vue?raw';
import DashedBadge                   from '@/Components/Badge/DashedBadge.vue';
import DashedBadgeRaw                from '@/Components/Badge/DashedBadge.vue?raw';
import DotStyleBadge                 from '@/Components/Badge/DotStyleBadge.vue';
import DotStyleBadgeRaw              from '@/Components/Badge/DotStyleBadge.vue?raw';
import IconBadge                     from '@/Components/Badge/IconBadge.vue';
import IconBadgeRaw                  from '@/Components/Badge/IconBadge.vue?raw';
import IconPositionBadge             from '@/Components/Badge/IconPositionBadge.vue';
import IconPositionBadgeRaw          from '@/Components/Badge/IconPositionBadge.vue?raw';
import OutlineBadge                  from '@/Components/Badge/OutlineBadge.vue';
import OutlineBadgeRaw               from '@/Components/Badge/OutlineBadge.vue?raw';
import PilledBadge                   from '@/Components/Badge/PilledBadge.vue';
import PilledBadgeRaw                from '@/Components/Badge/PilledBadge.vue?raw';
import SoftBadge                     from '@/Components/Badge/SoftBadge.vue';
import SoftBadgeRaw                  from '@/Components/Badge/SoftBadge.vue?raw';
import SolidBadge                    from '@/Components/Badge/SolidBadge.vue';
import SolidBadgeRaw                 from '@/Components/Badge/SolidBadge.vue?raw';
import { computed }                  from 'vue';

type Section = 'solid'
    | 'soft'
    | 'outline'
    | 'dash'
    | 'pilled'
    | 'size'
    | 'dot-style'
    | 'icon'
    | 'icon-position'
    | 'in-a-button'
    | 'chip'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'solid',
            {
                code:      SolidBadgeRaw,
                component: SolidBadge,
            },
        ],
        [
            'soft',
            {
                code:      SoftBadgeRaw,
                component: SoftBadge,
            },
        ],
        [
            'outline',
            {
                code:      OutlineBadgeRaw,
                component: OutlineBadge,
            },
        ],
        [
            'dash',
            {
                code:      DashedBadgeRaw,
                component: DashedBadge,
            },
        ],
        [
            'pilled',
            {
                code:      PilledBadgeRaw,
                component: PilledBadge,
            },
        ],
        [
            'size',
            {
                code:      BadgeSizeRaw,
                component: BadgeSize,
            },
        ],
        [
            'dot-style',
            {
                code:      DotStyleBadgeRaw,
                component: DotStyleBadge,
            },
        ],
        [
            'icon',
            {
                grid:      { columns: 8, rows: 2 },
                code:      IconBadgeRaw,
                component: IconBadge,
            },
        ],
        [
            'icon-position',
            {
                code:      IconPositionBadgeRaw,
                component: IconPositionBadge,
            },
        ],
        [
            'in-a-button',
            {
                code:      BadgeInAButtonRaw,
                component: BadgeInAButton,
            },
        ],
        [
            'chip',
            {
                code:      BadgeChipRaw,
                component: BadgeChip,
            },
        ],
    ]);
});
</script>
