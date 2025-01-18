<template>
    <FoSelect v-model="selectedOption"
              :label="{ text: 'Pick your favorite Movie' }"
              :options="options"
    />
</template>

<script setup lang="ts">
import type { Option } from 'flyonui-vue/dist/Components/Select/UI/FoSelect.vue';
import { FoSelect }    from 'flyonui-vue';
import { ref }         from 'vue';

const options = ref<Option[]>([
    { id: 1, text: 'The Godfather' },
    { id: 2, text: 'The Shawshank Redemption' },
    { id: 3, text: 'Pulp Fiction' },
    { id: 4, text: 'The Dark Knight' },
    { id: 5, text: `Schindler's List` },
]);

const selectedOption = ref<Option | null>(null);
</script>
