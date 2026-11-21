<template>
    <FoProgressStep class="max-w-40"
                    color="primary"
                    :steps="4"
                    :value="value1"
    />

    <FoProgressStep color="primary"
                    :steps="4"
                    :value="{ value: value1, label: { position: 'right' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="warning"
                    :steps="4"
                    :value="{ value: value2, label: { position: 'right' } }"
    />

    <FoProgressStep color="warning"
                    :steps="4"
                    :value="{ value: value2, label: { position: 'left' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="success"
                    :steps="4"
                    :value="{ value: value3, label: { position: 'right' } }"
    />

    <FoProgressStep color="success"
                    :steps="4"
                    :value="{ value: value3, label: { position: 'right' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="info"
                    :steps="10"
                    :value="{ value: value3, label: { position: 'right' } }"
    />

    <FoProgressStep color="info"
                    :steps="10"
                    :value="{ value: value3, label: { position: 'right' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="primary"
                    :steps="4"
                    :value="{ value: 50, label: { position: 'within' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="success"
                    :steps="4"
                    :value="{ value: 50, label: { position: 'floating' } }"
    />

    <FoProgressStep class="max-w-40"
                    color="info"
                    :steps="4"
                    :value="{ value: 75, label: { title: 'Title', position: 'left' } }"
    />

    <FoProgressStep class="h-56"
                    orientation="vertical"
                    color="warning"
                    :steps="4"
                    :value="{ value: 50, label: { position: 'floating', side: 'right' } }"
    />
</template>

<script setup lang="ts">
import { FoProgressStep } from 'flyonui-vue';
import { ref }            from 'vue';

const value1 = ref<number>(25);
const value2 = ref<number>(50);
const value3 = ref<number>(100);
</script>
