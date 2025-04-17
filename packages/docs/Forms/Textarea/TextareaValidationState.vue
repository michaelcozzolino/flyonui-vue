<template>
    <FoTextarea v-model="input"
                :label="{ text: 'Full name' }"
                placeholder="Hello!!!"
                :helper-text="{ text: 'Helper text' }"
                is-valid
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                :helper-text="{ text: 'Helper text' }"
                is-valid
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Full name' }"
                placeholder="Hello!!!"
                :helper-text="{ text: 'Helper text' }"
                :is-valid="false"
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                :helper-text="{ text: 'Helper text' }"
                :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
