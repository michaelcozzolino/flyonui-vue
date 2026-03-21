<template>
    <FoRadio v-model="selectedValue"
             label="Delete"
             helper-text="Notify me when this action happens."
             :value="deleteValue"
             is-valid
    />

    <FoRadio v-model="selectedValue"
             label="Archive"
             helper-text="Notify me when this action happens."
             :value="archiveValue"
             is-valid
    />

    <FoRadio v-model="selectedValue"
             label="Delete"
             helper-text="Notify me when this action happens."
             :value="deleteValue"
             :is-valid="false"
    />

    <FoRadio v-model="selectedValue"
             label="Archive"
             helper-text="Notify me when this action happens."
             :value="archiveValue"
             :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const deleteValue  = 'delete';
const archiveValue = 'archive';

const selectedValue = ref<typeof deleteValue | typeof archiveValue>('delete');
</script>
