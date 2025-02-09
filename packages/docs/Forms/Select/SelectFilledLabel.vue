<template>
    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'filled' }"
              :options="options"
    />
</template>

<script setup lang="ts">
import { FoSelect, type Option } from 'flyonui-vue';
import { ref }                   from 'vue';

const options = ref<Option[]>([
    { id: 1, text: 'The Godfather' },
    { id: 2, text: 'The Shawshank Redemption' },
    { id: 3, text: 'Pulp Fiction' },
    { id: 4, text: 'The Dark Knight' },
    { id: 5, text: `Schindler's List` },
]);

const selectedOption = ref<Option | null>(null);
</script>
