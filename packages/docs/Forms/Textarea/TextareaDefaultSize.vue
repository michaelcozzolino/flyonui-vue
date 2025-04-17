<template>
    <FoTextarea v-model="input"
                placeholder="Hello!!!"
                size="extraSmall"
    />

    <FoTextarea v-model="input"
                placeholder="Hello!!!"
                size="small"
    />

    <FoTextarea v-model="input"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                placeholder="Hello!!!"
                size="large"
    />

    <FoTextarea v-model="input"
                placeholder="Hello!!!"
                size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
