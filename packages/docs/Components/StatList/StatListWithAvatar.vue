<template>
    <FoStatList>
        <FoStatListItem>
            <FoStatListItemFigure>
                <!--            todo: avatar component -->
                <div class="avatar">
                    <div class="size-12 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                             alt="User Avatar"
                        >
                    </div>
                </div>
            </FoStatListItemFigure>

            <FoStatListItemTitle>
                Total page views
            </FoStatListItemTitle>

            <FoStatListItemValue>
                89400
            </FoStatListItemValue>

            <FoStatListItemDescription>
                21% ↗︎ than last month
            </FoStatListItemDescription>
        </FoStatListItem>
    </FoStatList>
</template>

<script setup lang="ts">
import {
    FoStatList,
    FoStatListItem,
    FoStatListItemDescription,
    FoStatListItemFigure,
    FoStatListItemTitle,
    FoStatListItemValue,
} from 'flyonui-vue';
</script>
