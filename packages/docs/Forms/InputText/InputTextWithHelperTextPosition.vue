<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                 }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
