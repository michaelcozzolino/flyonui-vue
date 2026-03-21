<template>
    <FoRange v-model="value"
             :min="0"
             :max="100"
             :step="25"
    >
        <template #steps>
            <span v-for="i in 5"
                  :key="i"
            >
                |
            </span>
        </template>
    </FoRange>
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
