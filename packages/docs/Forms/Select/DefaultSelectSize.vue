<template>
    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie' }"
              :options="options"
              size="extraSmall"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie' }"
              :options="options"
              size="small"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie' }"
              :options="options"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie' }"
              :options="options"
              size="large"
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
