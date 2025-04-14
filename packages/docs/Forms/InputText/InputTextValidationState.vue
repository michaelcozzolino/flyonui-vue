<template>
    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Helper text' }"
                 is-valid
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Helper text' }"
                 is-valid
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Helper text' }"
                 :is-valid="false"
    />

    <FoInputText v-model="input"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 :helper-text="{ text: 'Helper text' }"
                 :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
