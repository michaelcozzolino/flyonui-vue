<template>
    <FoRange v-model="value" />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
