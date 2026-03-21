<template>
    <FoButtonGroup class="drop-shadow">
        <FoRadio v-for="button in buttons"
                 :key="button.value"
                 v-model="selectedValue"
                 :label="button.label"
                 :value="button.value"
        />
    </FoButtonGroup>
</template>

<script setup lang="ts">
import { FoButtonGroup, FoRadio } from 'flyonui-vue';
import { ref }                    from 'vue';

const buttons = ref<{ label: string; value: string }[]>([
    {
        label: 'Radio 1',
        value: '1',
    },
    {
        label: 'Radio 2',
        value: '2',
    },
    {
        label: 'Radio 3',
        value: '3',
    },
]);

const selectedValue = ref<string>('1');
</script>
