<template>
    <FoRange v-model="value"
             size="extraSmall"
    />

    <FoRange v-model="value"
             size="small"
    />

    <FoRange v-model="value" />

    <FoRange v-model="value"
             size="large"
    />

    <FoRange v-model="value"
             size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
