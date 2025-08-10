<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultStatsRaw"
                 :component="DefaultStats"
    />

    <CodeSnippet v-else-if="section === 'with-avatar'"
                 id="with-avatar"
                 :code="StatsWithAvatarRaw"
                 :component="StatsWithAvatar"
    />

    <CodeSnippet v-else-if="section === 'with-icons-and-image'"
                 id="with-icons-and-image"
                 :code="StatsWithIconsAndImageRaw"
                 :component="StatsWithIconsAndImage"
    />

    <CodeSnippet v-else-if="section === 'centered-item'"
                 id="centered-item"
                 :code="CenteredItemStatsRaw"
                 :component="CenteredItemStats"
    />

    <CodeSnippet v-else-if="section === 'vertical'"
                 id="vertical"
                 :code="VerticalStatsRaw"
                 :component="VerticalStats"
    />

    <CodeSnippet v-else-if="section === 'with-progress-bar'"
                 id="with-progress-bar"
                 :code="StatsWithProgressBarRaw"
                 :component="StatsWithProgressBar"
    />

    <CodeSnippet v-else-if="section === 'with-actions-button'"
                 id="with-actions-button"
                 :code="StatsWithActionsButtonRaw"
                 :component="StatsWithActionsButton"
    />

    <CodeSnippet v-else-if="section === 'bordered'"
                 id="bordered"
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
import CodeSnippet               from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs         from '@/Api/UI/ComponentsApiDocs.vue';
import BorderedStats             from '@/Components/Stat/BorderedStats.vue';
import BorderedStatsRaw          from '@/Components/Stat/BorderedStats.vue?raw';
import CenteredItemStats         from '@/Components/Stat/CenteredItemStats.vue';
import CenteredItemStatsRaw      from '@/Components/Stat/CenteredItemStats.vue?raw';
import DefaultStats              from '@/Components/Stat/DefaultStats.vue';
import DefaultStatsRaw           from '@/Components/Stat/DefaultStats.vue?raw';
import StatsWithActionsButton    from '@/Components/Stat/StatsWithActionsButton.vue';
import StatsWithActionsButtonRaw from '@/Components/Stat/StatsWithActionsButton.vue?raw';
import StatsWithAvatar           from '@/Components/Stat/StatsWithAvatar.vue';
import StatsWithAvatarRaw        from '@/Components/Stat/StatsWithAvatar.vue?raw';
import StatsWithIconsAndImage    from '@/Components/Stat/StatsWithIconsAndImage.vue';
import StatsWithIconsAndImageRaw from '@/Components/Stat/StatsWithIconsAndImage.vue?raw';
import StatsWithProgressBar      from '@/Components/Stat/StatsWithProgressBar.vue';
import StatsWithProgressBarRaw   from '@/Components/Stat/StatsWithProgressBar.vue?raw';
import VerticalStats             from '@/Components/Stat/VerticalStats.vue';
import VerticalStatsRaw          from '@/Components/Stat/VerticalStats.vue?raw';

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
