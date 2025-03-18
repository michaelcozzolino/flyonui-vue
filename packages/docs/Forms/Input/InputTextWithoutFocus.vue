<template>
    <FoInputText v-model="input"
                 placeholder="Type here"
                 without-focus
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
