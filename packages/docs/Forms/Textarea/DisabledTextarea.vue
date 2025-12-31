<template>
    <FoTextarea v-model="input"
                :label="{ text: 'Your bio' }"
                placeholder="Hello!!!"
                disabled
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                disabled
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
