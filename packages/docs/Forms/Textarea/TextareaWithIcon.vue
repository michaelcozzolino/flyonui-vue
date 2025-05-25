<template>
    <FoTextarea v-model="input"
                icon="tabler:message"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                :icon="{ right: 'tabler:message' }"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                :icon="{ left: 'tabler:message', right: 'tabler:info-circle' }"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                icon="tabler:message"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                :icon="{ right: 'tabler:message' }"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
    />

    <FoTextarea v-model="input"
                :icon="{ left: 'tabler:message', right: 'tabler:info-circle' }"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
