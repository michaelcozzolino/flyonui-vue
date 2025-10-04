<template>
    <FoSelect v-model="selectedOption"
              class="max-w-sm"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
              :options="options"
              is-disabled
    />

    <FoSelect v-model="selectedOptionFloating"
              class="max-w-sm"
              :label="{ text: 'Pick your favorite Movie', type: 'floating' }"
              :options="options"
              is-disabled
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

const selectedOption         = useSelectedOption<number | null, SelectOption>(options, null);
const selectedOptionFloating = useSelectedOption<number, SelectOption>(options, 1);
</script>
