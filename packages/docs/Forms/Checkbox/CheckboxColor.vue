<template>
    <FoCheckbox v-model="isChecked"
                label="Default"
    />

    <FoCheckbox v-model="isChecked"
                label="Primary"
                color="primary"
    />

    <FoCheckbox v-model="isChecked"
                label="Secondary"
                color="secondary"
    />

    <FoCheckbox v-model="isChecked"
                label="Accent"
                color="accent"
    />

    <FoCheckbox v-model="isChecked"
                label="Info"
                color="info"
    />

    <FoCheckbox v-model="isChecked"
                label="Success"
                color="success"
    />

    <FoCheckbox v-model="isChecked"
                label="Warning"
                color="warning"
    />

    <FoCheckbox v-model="isChecked"
                label="Error"
                color="error"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
