<template>
    <FoRadio v-model="selectedValue"
             color="primary"
             size="extraSmall"
             label="Extra small"
             value="extra-small"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             color="primary"
             size="small"
             label="Small"
             value="small"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             color="primary"
             size="medium"
             label="Default"
             value="medium"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             color="primary"
             size="large"
             label="Large"
             value="large"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             color="primary"
             size="extraLarge"
             label="Extra large"
             value="extra-large"
             is-inset
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('medium');
</script>
