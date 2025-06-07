<template>
    <FoTextarea v-model="input"
                label="Your bio"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
