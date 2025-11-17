<template>
    <FoSwitch v-model="isChecked"
              color="primary"
              label="Extra small"
              size="extraSmall"
    />

    <FoSwitch v-model="isChecked"
              color="primary"
              label="Small"
              size="small"
    />

    <FoSwitch v-model="isChecked"
              color="primary"
              label="Default"
    />

    <FoSwitch v-model="isChecked"
              color="primary"
              label="Large"
              size="large"
    />

    <FoSwitch v-model="isChecked"
              color="primary"
              label="Extra Large"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isChecked = ref<boolean>(true);
</script>
