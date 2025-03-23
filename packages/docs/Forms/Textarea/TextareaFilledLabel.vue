<template>
    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'filled' }"
                placeholder="Hello!!!"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
