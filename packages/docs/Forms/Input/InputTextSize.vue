<template>
    <FoInputText v-model="input"
                 placeholder="John doe"
                 size="extraSmall"
    />

    <FoInputText v-model="input"
                 placeholder="John doe"
                 size="small"
    />

    <FoInputText v-model="input"
                 placeholder="John doe"
    />

    <FoInputText v-model="input"
                 placeholder="John doe"
                 size="large"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
