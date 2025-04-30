<template>
    <FoStats>
        <FoStat v-for="websiteStat in websiteStats"
                :key="websiteStat.id"
        >
            <FoStatFigure>
                <FoIcon :icon="websiteStat.icon"
                        size="doubleExtraLarge"
                />
            </FoStatFigure>

            <FoStatTitle>
                {{ websiteStat.title }}
            </FoStatTitle>

            <FoStatValue>
                {{ websiteStat.value }}
            </FoStatValue>

            <FoStatDescription>
                {{ websiteStat.description }}
            </FoStatDescription>
        </FoStat>

        <FoStat>
            <FoStatFigure>
                <!--            todo: avatar component -->
                <div class="avatar">
                    <div class="size-12 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                             alt="User Avatar"
                        >
                    </div>
                </div>
            </FoStatFigure>

            <FoStatValue class="text-success">
                95%
            </FoStatValue>

            <FoStatTitle>
                Customer Retention
            </FoStatTitle>

            <FoStatDescription>
                Steady over last quarter
            </FoStatDescription>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import type { Identifiable } from 'flyonui-vue';
import {
    FoIcon,
    FoStat,
    FoStatDescription,
    FoStatFigure,
    FoStats,
    FoStatTitle,
    FoStatValue,
}                            from 'flyonui-vue';
import { ref } from 'vue';

interface WebsiteStat extends Identifiable {
    title:       string;
    value:       string;
    description: string;
    icon:        string;
}

const websiteStats = ref<WebsiteStat[]>([
    {
        id:          1,
        title:       'Website Traffic',
        value:       '32K',
        description: '5% ↗︎ than last week',
        icon:        'tabler:world',
    },
    {
        id:          2,
        title:       'New Signups',
        value:       '1.2K',
        description: '12% increase this month',
        icon:        'tabler:users-group',
    },
]);
</script>
