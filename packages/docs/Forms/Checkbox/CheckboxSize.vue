<template>
    <FoCheckbox v-model="isChecked"
                color="primary"
                label="Extra small"
                size="extraSmall"
    />

    <FoCheckbox v-model="isChecked"
                color="primary"
                label="Small"
                size="small"
    />

    <FoCheckbox v-model="isChecked"
                color="primary"
                label="Default"
    />

    <FoCheckbox v-model="isChecked"
                color="primary"
                label="Large"
                size="large"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
