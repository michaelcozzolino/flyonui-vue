<template>
    <FoCheckbox v-model="isChecked"
                label="Delete (Valid)"
                helper-text="Notify me when this action happens."
                :is-valid="true"
    />

    <FoCheckbox v-model="isChecked"
                label="Delete (Invalid)"
                helper-text="Notify me when this action happens."
                :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
