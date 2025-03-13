<template>
    <FoStatList>
        <FoStatListItem v-for="websiteStat in websiteStats"
                        :key="websiteStat.id"
        >
            <FoStatListItemFigure>
                <FoIcon :icon="websiteStat.icon"
                        size="doubleExtraLarge"
                />
            </FoStatListItemFigure>

            <FoStatListItemTitle>
                {{ websiteStat.title }}
            </FoStatListItemTitle>

            <FoStatListItemValue>
                {{ websiteStat.value }}
            </FoStatListItemValue>

            <FoStatListItemDescription>
                {{ websiteStat.description }}
            </FoStatListItemDescription>
        </FoStatListItem>

        <FoStatListItem>
            <FoStatListItemFigure>
                <!--            todo: avatar component -->
                <div class="avatar">
                    <div class="size-12 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                             alt="User Avatar"
                        >
                    </div>
                </div>
            </FoStatListItemFigure>

            <FoStatListItemValue class="text-success">
                95%
            </FoStatListItemValue>

            <FoStatListItemTitle>
                Customer Retention
            </FoStatListItemTitle>

            <FoStatListItemDescription>
                Steady over last quarter
            </FoStatListItemDescription>
        </FoStatListItem>
    </FoStatList>
</template>

<script setup lang="ts">
import type { Identifiable } from 'flyonui-vue';
import {
    FoIcon,
    FoStatList,
    FoStatListItem,
    FoStatListItemDescription,
    FoStatListItemFigure,
    FoStatListItemTitle,
    FoStatListItemValue,
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
