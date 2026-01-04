<template>
    <FoInputText v-model="name"
                 class="bg-blue-700"
                 label="Name"
                 placeholder="Enter your name..."
                 helper-text="your name here"
                 :style="{ width: '500px' }"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const name = ref<string>('');
</script>
