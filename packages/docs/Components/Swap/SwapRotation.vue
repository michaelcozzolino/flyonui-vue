<template>
    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoIcon icon="tabler:sun" />
        </template>

        <template #off>
            <FoIcon icon="tabler:moon" />
        </template>
    </FoSwap>

    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoButton icon="tabler:x"
                      shape="circle"
            />
        </template>

        <template #off>
            <FoButton icon="tabler:menu-2"
                      shape="circle"
            />
        </template>
    </FoSwap>

    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoButton icon="tabler:player-pause"
                      shape="circle"
            />
        </template>

        <template #off>
            <FoButton icon="tabler:player-play"
                      shape="circle"
            />
        </template>
    </FoSwap>
</template>

<script setup lang="ts">
import { FoButton, FoIcon, FoSwap } from 'flyonui-vue';
import { ref }                      from 'vue';

const isOn = ref<boolean>(false);
</script>
