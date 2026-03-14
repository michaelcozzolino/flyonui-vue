<template>
    <FoRadio v-model="selectedValue"
             class="[--input-color:pink]"
             label="FlyonUI variable"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             class="checked:text-pink-300"
             label="Tailwind utility colors"
             :value="selectedValue"
    />

    <FoRadio v-model="selectedValue"
             class="[--input-color:green]"
             label="FlyonUI variable"
             :value="selectedValue"
             is-inset
    />

    <FoRadio v-model="selectedValue"
             class="checked:text-green-700"
             label="FlyonUI variable"
             :value="selectedValue"
             is-inset
    />
</template>

<script setup lang="ts">
import { FoRadio } from 'flyonui-vue';
import { ref }     from 'vue';

const selectedValue = ref<string>('value');
</script>
