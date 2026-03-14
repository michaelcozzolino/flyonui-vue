<template>
    <FoStats>
        <FoStat>
            <FoStatFigure>
                <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'User Avatar' }"
                          shape="circle"
                          size="large"
                />
            </FoStatFigure>

            <FoStatTitle>
                Total page views
            </FoStatTitle>

            <FoStatValue>
                89400
            </FoStatValue>

            <FoStatDescription>
                21% ↗︎ than last month
            </FoStatDescription>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import {
    FoAvatar,
    FoStat,
    FoStatDescription,
    FoStatFigure,
    FoStats,
    FoStatTitle,
    FoStatValue,
} from 'flyonui-vue';
</script>
