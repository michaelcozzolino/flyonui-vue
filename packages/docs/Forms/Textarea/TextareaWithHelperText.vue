<template>
    <FoTextarea v-model="input"
                :label="{ text: 'Full name' }"
                placeholder="Hello!!!"
                helper-text="Helper text"
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                :helper-text="{ text: 'Helper text', position: 'right' }"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
