<template>
    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoIcon icon="tabler:sun"
                    size="extraLarge"
            />
        </template>

        <template #off>
            <FoIcon icon="tabler:moon"
                    size="extraLarge"
            />
        </template>
    </FoSwap>

    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoIconButton icon="tabler:x"
                          shape="circle"
            />
        </template>

        <template #off>
            <FoIconButton icon="tabler:menu-2"
                          shape="circle"
            />
        </template>
    </FoSwap>

    <FoSwap v-model="isOn"
            animation="rotation"
    >
        <template #on>
            <FoIconButton icon="tabler:player-pause"
                          shape="circle"
            />
        </template>

        <template #off>
            <FoIconButton icon="tabler:player-play"
                          shape="circle"
            />
        </template>
    </FoSwap>
</template>

<script setup lang="ts">
import { FoIcon, FoIconButton, FoSwap } from 'flyonui-vue';
import { ref }                          from 'vue';

const isOn = ref<boolean>(false);
</script>
