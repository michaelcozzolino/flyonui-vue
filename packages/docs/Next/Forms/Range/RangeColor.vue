<template>
    <FoRange v-model="value"
             color="neutral"
    />

    <FoRange v-model="value"
             color="primary"
    />

    <FoRange v-model="value"
             color="secondary"
    />

    <FoRange v-model="value"
             color="accent"
    />

    <FoRange v-model="value"
             color="info"
    />

    <FoRange v-model="value"
             color="success"
    />

    <FoRange v-model="value"
             color="warning"
    />

    <FoRange v-model="value"
             color="error"
    />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
