<template>
    Min: 0, Max: 100, Step: 1, Value: {{ value1 }}
    <FoRange v-model="value1"
             :min="0"
             :max="100"
    />

    Min: 50, Max: 100, Step: 5, Value: {{ value2 }}
    <FoRange v-model="value2"
             :min="50"
             :max="100"
             :step="5"
    />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value1 = ref<number>(50);
const value2 = ref<number>(50);
</script>
