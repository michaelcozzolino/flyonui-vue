<template>
    <FoDivider orientation="horizontal" />

    <FoDivider orientation="horizontal">
        Text
    </FoDivider>

    <FoDivider orientation="horizontal">
        <FoIcon icon="tabler:sun"
                size="small"
        />
    </FoDivider>

    <FoDivider class="h-72"
               orientation="horizontal"
    >
        <FoIcon icon="tabler:sun"
                size="small"
        />
    </FoDivider>
</template>

<script setup lang="ts">
import { FoDivider, FoIcon } from 'flyonui-vue';
</script>
