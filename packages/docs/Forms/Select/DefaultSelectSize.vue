<template>
    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
              size="extraSmall"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
              size="small"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
              size="large"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import type { SelectOption }           from 'flyonui-vue';
import { FoSelect, useSelectedOption } from 'flyonui-vue';
import { ref }                         from 'vue';

const options = ref<SelectOption[]>([
    { id: 1, text: 'The Godfather' },
    { id: 2, text: 'The Shawshank Redemption' },
    { id: 3, text: 'Pulp Fiction' },
    { id: 4, text: 'The Dark Knight' },
    { id: 5, text: `Schindler's List` },
]);

const selectedOption = useSelectedOption(options, null);
</script>
