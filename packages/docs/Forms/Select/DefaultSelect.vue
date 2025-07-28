<template>
    <FoSelect v-model="selectedOption"
              class="max-w-sm"
              label="Pick your favorite Movie"
              :options="options"
    />

    <FoSelect v-model="selectedNullableOption"
              class="max-w-sm"
              :label="{ text: 'Pick your favorite Movie', type: 'inline' }"
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

const selectedOption         = useSelectedOption(options, options.value[0].id, false);
const selectedNullableOption = useSelectedOption(options, null);
</script>
