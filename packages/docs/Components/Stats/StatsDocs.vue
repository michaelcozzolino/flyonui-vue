<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoStats', 'FoStat', 'FoStatTitle', 'FoStatDescription', 'FoStatValue']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BorderedStats                    from '@/Components/Stats/BorderedStats.vue';
import BorderedStatsRaw                 from '@/Components/Stats/BorderedStats.vue?raw';
import CenteredItemStats                from '@/Components/Stats/CenteredItemStats.vue';
import CenteredItemStatsRaw             from '@/Components/Stats/CenteredItemStats.vue?raw';
import DefaultStats                     from '@/Components/Stats/DefaultStats.vue';
import DefaultStatsRaw                  from '@/Components/Stats/DefaultStats.vue?raw';
import StatsWithActionsButton           from '@/Components/Stats/StatsWithActionsButton.vue';
import StatsWithActionsButtonRaw        from '@/Components/Stats/StatsWithActionsButton.vue?raw';
import StatsWithAvatar                  from '@/Components/Stats/StatsWithAvatar.vue';
import StatsWithAvatarRaw               from '@/Components/Stats/StatsWithAvatar.vue?raw';
import StatsWithIconsAndImage           from '@/Components/Stats/StatsWithIconsAndImage.vue';
import StatsWithIconsAndImageRaw        from '@/Components/Stats/StatsWithIconsAndImage.vue?raw';
import StatsWithProgressBar             from '@/Components/Stats/StatsWithProgressBar.vue';
import StatsWithProgressBarRaw          from '@/Components/Stats/StatsWithProgressBar.vue?raw';
import VerticalStats                    from '@/Components/Stats/VerticalStats.vue';
import VerticalStatsRaw                 from '@/Components/Stats/VerticalStats.vue?raw';

type Section = Default
    | 'with-avatar'
    | 'with-icons-and-image'
    | 'centered-item'
    | 'vertical'
    | 'with-progress-bar'
    | 'with-actions-button'
    | 'bordered'
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
                    codePreview: DefaultStatsRaw,
                    component:   DefaultStats,
                },
            },
        ],
        [
            'with-avatar',
            {
                vue: {
                    codePreview: StatsWithAvatarRaw,
                    component:   StatsWithAvatar,
                },
            },
        ],
        [
            'with-icons-and-image',
            {
                vue: {
                    codePreview: StatsWithIconsAndImageRaw,
                    component:   StatsWithIconsAndImage,
                },
            },
        ],
        [
            'centered-item',
            {
                vue: {
                    codePreview: CenteredItemStatsRaw,
                    component:   CenteredItemStats,
                },
            },
        ],
        [
            'vertical',
            {
                vue: {
                    codePreview: VerticalStatsRaw,
                    component:   VerticalStats,
                },
            },
        ],
        [
            'with-progress-bar',
            {
                vue: {
                    codePreview: StatsWithProgressBarRaw,
                    component:   StatsWithProgressBar,
                },
            },
        ],
        [
            'with-actions-button',
            {
                vue: {
                    codePreview: StatsWithActionsButtonRaw,
                    component:   StatsWithActionsButton,
                },
            },
        ],
        [
            'bordered',
            {
                vue: {
                    codePreview: BorderedStatsRaw,
                    component:   BorderedStats,
                },
            },
        ],
    ]);
});
</script>
