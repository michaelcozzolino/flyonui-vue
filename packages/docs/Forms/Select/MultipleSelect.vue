<template>
    <FoMultipleSelect v-model="selectedOptions"
                      class="max-w-sm"
                      label="Pick your favorite Movies:"
                      :options="options"
                      :visible-options="3"
    />
</template>

<script setup lang="ts">
import type { SelectOption } from 'flyonui-vue';
import { FoMultipleSelect }  from 'flyonui-vue';
import { ref }               from 'vue';

const options = ref<SelectOption[]>([
    { id: 1, text: 'The Godfather' },
    { id: 2, text: 'The Shawshank Redemption' },
    { id: 3, text: 'Pulp Fiction' },
    { id: 4, text: 'The Dark Knight' },
    { id: 5, text: `Schindler's List` },
]);

const selectedOptions = ref<SelectOption[]>([]);
</script>
