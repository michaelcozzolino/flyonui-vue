<template>
    <FoRadio v-model="selectedValue"
             label="Default"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="neutral"
             label="Neutral"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="primary"
             label="Primary"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="secondary"
             label="Secondary"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="accent"
             label="Accent"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="info"
             label="Info"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="success"
             label="Success"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="warning"
             label="Warning"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             color="error"
             label="Error"
             :value="selectedValue"
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('value');
</script>
