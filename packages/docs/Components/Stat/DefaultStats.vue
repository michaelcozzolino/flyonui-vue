<template>
    <FoStats>
        <FoStat>
            <FoStatTitle>
                Total Emails Sent
            </FoStatTitle>

            <FoStatValue>
                76250
            </FoStatValue>

            <FoStatDescription>
                18% more than last month
            </FoStatDescription>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import {
    FoStat,
    FoStatDescription,
    FoStats,
    FoStatTitle,
    FoStatValue,
} from 'flyonui-vue';
</script>
