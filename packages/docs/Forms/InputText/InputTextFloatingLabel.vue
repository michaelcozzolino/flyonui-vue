<template>
    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
