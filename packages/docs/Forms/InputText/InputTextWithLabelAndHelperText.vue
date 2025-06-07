<template>
    <FoInputText v-model="input"
                 label="Full Name"
                 placeholder="John Doe"
                 helper-text="Please write your full name"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Please write your full name', position: 'right' }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Please write your full name' }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Please write your full name', position: 'right' }"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
