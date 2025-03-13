<template>
    <FoStatList>
        <FoStatListItem>
            <FoStatListItemTitle>
                Total Emails Sent
            </FoStatListItemTitle>

            <FoStatListItemValue>
                76250
            </FoStatListItemValue>

            <FoStatListItemDescription>
                18% more than last month
            </FoStatListItemDescription>
        </FoStatListItem>
    </FoStatList>
</template>

<script setup lang="ts">
import {
    FoStatList,
    FoStatListItem,
    FoStatListItemDescription,
    FoStatListItemTitle,
    FoStatListItemValue,
} from 'flyonui-vue';
</script>
