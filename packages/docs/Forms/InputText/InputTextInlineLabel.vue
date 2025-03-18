<template>
    <FoInputText v-model="name"
                 :label="{ text: 'Name', type: 'inline' }"
                 placeholder="FlyonUI"
    />

    <FoInputText v-model="email"
                 :label="{ text: 'Email', type: 'inline' }"
                 placeholder="admin@site.com"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const name  = ref<string>('');
const email = ref<string>('');
</script>
