<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John doe"
                 shape="pilled"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John doe"
                 shape="pilled"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John doe"
                 shape="pilled"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
