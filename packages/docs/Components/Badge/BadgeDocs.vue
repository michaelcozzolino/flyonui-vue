<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoBadge', 'FoDotStyleBadge']"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BadgeChip                        from '@/Components/Badge/BadgeChip.vue';
import BadgeChipRaw                     from '@/Components/Badge/BadgeChip.vue?raw';
import BadgeInAButton                   from '@/Components/Badge/BadgeInAButton.vue';
import BadgeInAButtonRaw                from '@/Components/Badge/BadgeInAButton.vue?raw';
import BadgeSize                        from '@/Components/Badge/BadgeSize.vue';
import BadgeSizeRaw                     from '@/Components/Badge/BadgeSize.vue?raw';
import DashedBadge                      from '@/Components/Badge/DashedBadge.vue';
import DashedBadgeRaw                   from '@/Components/Badge/DashedBadge.vue?raw';
import DotStyleBadge                    from '@/Components/Badge/DotStyleBadge.vue';
import DotStyleBadgeRaw                 from '@/Components/Badge/DotStyleBadge.vue?raw';
import IconBadge                        from '@/Components/Badge/IconBadge.vue';
import IconBadgeRaw                     from '@/Components/Badge/IconBadge.vue?raw';
import IconPositionBadge                from '@/Components/Badge/IconPositionBadge.vue';
import IconPositionBadgeRaw             from '@/Components/Badge/IconPositionBadge.vue?raw';
import OutlineBadge                     from '@/Components/Badge/OutlineBadge.vue';
import OutlineBadgeRaw                  from '@/Components/Badge/OutlineBadge.vue?raw';
import PilledBadge                      from '@/Components/Badge/PilledBadge.vue';
import PilledBadgeRaw                   from '@/Components/Badge/PilledBadge.vue?raw';
import SoftBadge                        from '@/Components/Badge/SoftBadge.vue';
import SoftBadgeRaw                     from '@/Components/Badge/SoftBadge.vue?raw';
import SolidBadge                       from '@/Components/Badge/SolidBadge.vue';
import SolidBadgeRaw                    from '@/Components/Badge/SolidBadge.vue?raw';

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

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'solid',
            {
                vue: {
                    codePreview: SolidBadgeRaw,
                    component:   SolidBadge,
                },
            },
        ],
        [
            'soft',
            {
                vue: {
                    codePreview: SoftBadgeRaw,
                    component:   SoftBadge,
                },
            },
        ],
        [
            'outline',
            {
                vue: {
                    codePreview: OutlineBadgeRaw,
                    component:   OutlineBadge,
                },
            },
        ],
        [
            'dash',
            {
                vue: {
                    codePreview: DashedBadgeRaw,
                    component:   DashedBadge,
                },
            },
        ],
        [
            'pilled',
            {
                vue: {
                    codePreview: PilledBadgeRaw,
                    component:   PilledBadge,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: BadgeSizeRaw,
                    component:   BadgeSize,
                },
            },
        ],
        [
            'dot-style',
            {
                vue: {
                    codePreview: DotStyleBadgeRaw,
                    component:   DotStyleBadge,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    codePreview: IconBadgeRaw,
                    component:   IconBadge,
                },
                grid: { columns: 8, rows: 2 },
            },
        ],
        [
            'icon-position',
            {
                vue: {
                    codePreview: IconPositionBadgeRaw,
                    component:   IconPositionBadge,
                },
            },
        ],
        [
            'in-a-button',
            {
                vue: {
                    codePreview: BadgeInAButtonRaw,
                    component:   BadgeInAButton,
                },
            },
        ],
        [
            'chip',
            {
                vue: {
                    codePreview: BadgeChipRaw,
                    component:   BadgeChip,
                },
            },
        ],
    ]);
});
</script>
