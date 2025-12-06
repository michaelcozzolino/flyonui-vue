<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultStatsRaw"
                      :component="DefaultStats"
    />

    <ComponentPreview v-else-if="section === 'with-avatar'"
                      :data-test-screenshot="section"
                      :code="StatsWithAvatarRaw"
                      :component="StatsWithAvatar"
    />

    <ComponentPreview v-else-if="section === 'with-icons-and-image'"
                      :data-test-screenshot="section"
                      :code="StatsWithIconsAndImageRaw"
                      :component="StatsWithIconsAndImage"
    />

    <ComponentPreview v-else-if="section === 'centered-item'"
                      :data-test-screenshot="section"
                      :code="CenteredItemStatsRaw"
                      :component="CenteredItemStats"
    />

    <ComponentPreview v-else-if="section === 'vertical'"
                      :data-test-screenshot="section"
                      :code="VerticalStatsRaw"
                      :component="VerticalStats"
    />

    <ComponentPreview v-else-if="section === 'with-progress-bar'"
                      :data-test-screenshot="section"
                      :code="StatsWithProgressBarRaw"
                      :component="StatsWithProgressBar"
    />

    <ComponentPreview v-else-if="section === 'with-actions-button'"
                      :data-test-screenshot="section"
                      :code="StatsWithActionsButtonRaw"
                      :component="StatsWithActionsButton"
    />

    <ComponentPreview v-else-if="section === 'bordered'"
                      :data-test-screenshot="section"
                      :code="BorderedStatsRaw"
                      :component="BorderedStats"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoStats', 'FoStat', 'FoStatTitle', 'FoStatDescription', 'FoStatValue']"
    />
</template>

<script setup lang="ts">
import type { ApiType }          from '@/Api/Types/Api.ts';
import type { Default }          from 'flyonui-vue';
import ComponentPreview          from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs         from '@/Api/UI/ComponentsApiDocs.vue';
import BorderedStats             from '@/Components/Stats/BorderedStats.vue';
import BorderedStatsRaw          from '@/Components/Stats/BorderedStats.vue?raw';
import CenteredItemStats         from '@/Components/Stats/CenteredItemStats.vue';
import CenteredItemStatsRaw      from '@/Components/Stats/CenteredItemStats.vue?raw';
import DefaultStats              from '@/Components/Stats/DefaultStats.vue';
import DefaultStatsRaw           from '@/Components/Stats/DefaultStats.vue?raw';
import StatsWithActionsButton    from '@/Components/Stats/StatsWithActionsButton.vue';
import StatsWithActionsButtonRaw from '@/Components/Stats/StatsWithActionsButton.vue?raw';
import StatsWithAvatar           from '@/Components/Stats/StatsWithAvatar.vue';
import StatsWithAvatarRaw        from '@/Components/Stats/StatsWithAvatar.vue?raw';
import StatsWithIconsAndImage    from '@/Components/Stats/StatsWithIconsAndImage.vue';
import StatsWithIconsAndImageRaw from '@/Components/Stats/StatsWithIconsAndImage.vue?raw';
import StatsWithProgressBar      from '@/Components/Stats/StatsWithProgressBar.vue';
import StatsWithProgressBarRaw   from '@/Components/Stats/StatsWithProgressBar.vue?raw';
import VerticalStats             from '@/Components/Stats/VerticalStats.vue';
import VerticalStatsRaw          from '@/Components/Stats/VerticalStats.vue?raw';

interface Props {
    section: Default
        | 'with-avatar'
        | 'with-icons-and-image'
        | 'centered-item'
        | 'vertical'
        | 'with-progress-bar'
        | 'with-actions-button'
        | 'bordered'
        | ApiType;
}

defineProps<Props>();
</script>
