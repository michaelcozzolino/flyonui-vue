<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                 }"
                 is-valid
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
                 is-valid
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
                 is-valid
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                 }"
                 :is-valid="false"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
                 :is-valid="false"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
                 :helper-text="{
                     bottom: { left: 'Bottom Left', right: 'Bottom Right' },
                     top: 'Top Right',
                 }"
                 :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
