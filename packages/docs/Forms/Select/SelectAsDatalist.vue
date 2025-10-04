<template>
    <FoDatalist v-model="selectedOption"
                class="max-w-sm"
                label="Select your city"
                placeholder="Type to search..."
                :options="options"
    />
</template>

<script setup lang="ts">
import type { SelectOption }             from 'flyonui-vue';
import { FoDatalist, useSelectedOption } from 'flyonui-vue';
import { ref }                           from 'vue';

const options = ref<SelectOption[]>([
    { id: 1, text: 'San Francisco' },
    { id: 2, text: 'New York' },
    { id: 3, text: 'Seattle' },
    { id: 4, text: 'Los Angeles' },
    { id: 5, text: 'Chicago' },
]);

const selectedOption = useSelectedOption<number | null, SelectOption>(options, null);
</script>
