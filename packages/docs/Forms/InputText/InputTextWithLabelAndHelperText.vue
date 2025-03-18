<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{ bottom: { left: 'Please write your full name' } }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{ bottom: { left: 'Please write your full name' } }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{ bottom: { left: 'Please write your full name' } }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
                 :helper-text="{ bottom: { left: 'Please write your full name' } }"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
