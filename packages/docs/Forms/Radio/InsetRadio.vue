<template>
    <FoRadio v-model="selectedValue"
             label="Default"
             :value="defaultValue"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             label="Checked"
             :value="checkedValue"
             is-inset
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const defaultValue = 'default';
const checkedValue = 'checked';

const selectedValue = ref<typeof defaultValue | typeof checkedValue>('checked');
</script>
