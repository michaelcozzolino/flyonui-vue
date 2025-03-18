<template>
    <FoInputText v-model="input"
                 :label="{ text: 'What is your name?' }"
                 placeholder="John Doe"
                 is-disabled
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 is-disabled
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
                 is-disabled
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
