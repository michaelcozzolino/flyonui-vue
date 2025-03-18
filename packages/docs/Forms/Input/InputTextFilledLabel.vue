<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'filled' }"
                 placeholder="John Doe"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
