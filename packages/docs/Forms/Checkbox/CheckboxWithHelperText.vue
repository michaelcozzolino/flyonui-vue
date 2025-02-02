<template>
    <FoCheckbox v-model="isChecked"
                label="Archive"
                helper-text="Notify me when this action happens."
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
