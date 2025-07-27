<template>
    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', isHidden: true }"
              :options="options"
    />

    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie', type: 'floating', isHidden: true }"
              :options="options"
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

const selectedOption = useSelectedOption(options, options.value[0].id, false);
</script>
