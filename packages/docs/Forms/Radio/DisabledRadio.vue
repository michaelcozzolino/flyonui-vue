<template>
    <FoRadio v-model="selectedValue"
             :value="selectedValue"
             disabled
    />

    <FoRadio v-model="selectedValue"
             value="unchecked"
             disabled
    />

    <FoRadio v-model="selectedValue"
             :value="selectedValue"
             is-inset
             disabled
    />

    <FoRadio v-model="selectedValue"
             value="unchecked"
             is-inset
             disabled
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('checked');
</script>
