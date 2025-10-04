<template>
    <FoSelect v-model="selectedOption"
              class="max-w-sm"
              label="Choose a technology"
              :options="options"
    />
</template>

<script setup lang="ts">
import type { SelectOption, SelectOptionType } from 'flyonui-vue';
import { FoSelect, useSelectedOption }         from 'flyonui-vue';
import { ref }                                 from 'vue';

const options = ref<SelectOptionType[]>([
    {
        label:   'Frontend Technologies',
        options: [
            { id: 1, text: 'HTML' },
            { id: 2, text: 'CSS' },
            { id: 3, text: 'JavaScript' },
        ],
    },
    {
        label:   'Backend Technologies',
        options: [
            { id: 4, text: 'Node.js' },
            { id: 5, text: 'Python' },
            { id: 6, text: 'Java' },
        ],
    },
]);

const selectedOption = useSelectedOption<number, SelectOption>(options, 1);
</script>
