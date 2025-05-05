<template>
    <FoSwap v-model="isOn"
            class="text-6xl"
            animation="flip"
    >
        <template #on>
            😈
        </template>

        <template #off>
            😇
        </template>
    </FoSwap>
</template>

<script setup lang="ts">
import { FoSwap } from 'flyonui-vue';
import { ref }    from 'vue';

const isOn = ref<boolean>(false);
</script>
