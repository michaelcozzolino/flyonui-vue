<template>
    <FoProgressStep class="max-w-40"
                    color="primary"
                    :steps="4"
                    :value="value1"
    />

    <FoProgressStep color="primary"
                    :steps="4"
                    :value="value1"
    />

    <FoProgressStep class="max-w-40"
                    color="warning"
                    :steps="4"
                    :value="value2"
    />

    <FoProgressStep color="warning"
                    :steps="4"
                    :value="value2"
    />

    <FoProgressStep class="max-w-40"
                    color="success"
                    :steps="4"
                    :value="value3"
    />

    <FoProgressStep color="success"
                    :steps="4"
                    :value="value3"
    />

    <FoProgressStep class="max-w-40"
                    color="info"
                    :steps="10"
                    :value="value3"
    />

    <FoProgressStep color="info"
                    :steps="10"
                    :value="value3"
    />
</template>

<script setup lang="ts">
import { FoProgressStep } from 'flyonui-vue';
import { ref }            from 'vue';

const value1 = ref<number>(49.9);
const value2 = ref<number>(50);
const value3 = ref<number>(100);
</script>
