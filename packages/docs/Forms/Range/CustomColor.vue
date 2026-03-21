<template>
    <FoRange v-model="value"
             class="[--range-color:teal]!"
    />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
