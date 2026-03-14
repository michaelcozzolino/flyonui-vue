<template>
    <div class="flex flex-col gap-2">
        <FoRadio v-model="selectedValue"
                 color="primary"
                 label="Vue"
                 value="vue"
        />

        <FoRadio v-model="selectedValue"
                 color="primary"
                 label="Angular"
                 value="angular"
        />

        <FoRadio v-model="selectedValue"
                 color="primary"
                 label="React"
                 value="react"
        />
    </div>
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('angular');
</script>
