<template>
    <FoSwap v-model="isOn">
        <template #on>
            ON
        </template>

        <template #off>
            OFF
        </template>
    </FoSwap>

    <FoSwap v-model="isOn">
        <template #on>
            <FoIcon icon="tabler:volume" />
        </template>

        <template #off>
            <FoIcon icon="tabler:volume-off" />
        </template>
    </FoSwap>

    <FoSwap v-model="isOn">
        <template #on>
            LTR
        </template>

        <template #off>
            RTL
        </template>
    </FoSwap>
</template>

<script setup lang="ts">
import { FoIcon, FoSwap } from 'flyonui-vue';
import { ref }            from 'vue';

const isOn = ref<boolean>(false);
</script>
