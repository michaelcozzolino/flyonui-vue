<template>
    <FoSwitch v-model="isChecked"
              label="Default"
    />

    <FoSwitch v-model="isChecked"
              label="Primary"
              color="primary"
    />

    <FoSwitch v-model="isChecked"
              label="Secondary"
              color="secondary"
    />

    <FoSwitch v-model="isChecked"
              label="Accent"
              color="accent"
    />

    <FoSwitch v-model="isChecked"
              label="Info"
              color="info"
    />

    <FoSwitch v-model="isChecked"
              label="Success"
              color="success"
    />

    <FoSwitch v-model="isChecked"
              label="Warning"
              color="warning"
    />

    <FoSwitch v-model="isChecked"
              label="Error"
              color="error"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isChecked = ref<boolean>(true);
</script>
