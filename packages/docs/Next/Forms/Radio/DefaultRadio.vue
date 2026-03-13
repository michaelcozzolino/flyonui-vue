<template>
    <FoRadio v-model="selectedValue"
             label="Default"
             :value="defaultValue"
    />

    <FoRadio v-model="selectedValue"
             label="Checked"
             :value="checkedValue"
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const defaultValue = 'default';
const checkedValue = 'checked';

const selectedValue = ref<typeof defaultValue | typeof checkedValue>('checked');
</script>
