<template>
    <FoRadio v-model="selectedValue"
             :value="selectedValue"
             is-disabled
    />

    <FoRadio v-model="selectedValue"
             value="unchecked"
             is-disabled
    />

    <FoRadio v-model="selectedValue"
             :value="selectedValue"
             is-inset
             is-disabled
    />

    <FoRadio v-model="selectedValue"
             value="unchecked"
             is-inset
             is-disabled
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('checked');
</script>
