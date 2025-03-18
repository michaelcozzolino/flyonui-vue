<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full name', isHidden: true }"
                 placeholder="John Doe"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
