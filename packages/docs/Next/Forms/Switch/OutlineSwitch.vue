<template>
    <FoSwitch v-model="isChecked"
              label="Default"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Primary"
              color="primary"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Secondary"
              color="secondary"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Accent"
              color="accent"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Info"
              color="info"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Success"
              color="success"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Warning"
              color="warning"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              label="Error"
              color="error"
              preset="outline"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isChecked = ref<boolean>(true);
</script>
