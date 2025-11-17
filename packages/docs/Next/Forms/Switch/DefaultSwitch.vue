<template>
    <FoSwitch v-model="isDefaultChecked"
              label="Default"
    />

    <FoSwitch v-model="isChecked"
              label="Checked"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isDefaultChecked = ref<boolean>(false);
const isChecked        = ref<boolean>(true);
</script>
