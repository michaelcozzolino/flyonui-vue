<template>
    <FoSwitch v-model="isChecked"
              label="Email Notifications"
              helper-text="Receive email notifications for updates"
              :is-valid="true"
    />

    <FoSwitch v-model="isChecked"
              label="Dark Mode"
              helper-text="Enable dark mode for better readability"
              preset="outline"
              :is-valid="true"
    />

    <FoSwitch v-model="isChecked"
              label="Email Notifications"
              helper-text="Receive email notifications for updates"
              preset="outline"
              :is-valid="false"
    />

    <FoSwitch v-model="isChecked"
              label="Dark Mode"
              helper-text="Enable dark mode for better readability"
              :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isChecked = ref<boolean>(true);
</script>
