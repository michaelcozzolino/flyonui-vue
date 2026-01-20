<template>
    <FoSwitchGroup>
        <FoSwitch v-for="sw in switches"
                  :key="sw.label"
                  v-model="sw.isChecked"
                  :color="sw.color"
                  :label="sw.label"
                  :helper-text="sw.helperText"
        />
    </FoSwitchGroup>
</template>

<script setup lang="ts">
import type { SwitchProps }        from 'flyonui-vue';
import { FoSwitch, FoSwitchGroup } from 'flyonui-vue';
import { ref }                     from 'vue';

const switches = ref<(SwitchProps & { isChecked: boolean })[]>([
    {
        label:      'Email Notifications',
        helperText: 'Receive email notifications for updates',
        color:      'primary',
        isChecked:  false,
    },
    {
        label:      'Dark Mode',
        helperText: 'Enable dark mode for better readability',
        color:      'primary',
        isChecked:  true,
    },
    {
        label:      'Auto-Save',
        helperText: 'Automatically save changes as you edit',
        color:      'primary',
        isChecked:  false,
    },
]);
</script>
