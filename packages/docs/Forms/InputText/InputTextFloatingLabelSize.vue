<template>
    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 size="extraSmall"
    />

    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 size="small"
    />

    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
    />

    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 size="large"
    />

    <FoInputText v-model="input"
                 class="max-w-sm"
                 :label="{ text: 'Full Name', type: 'floating' }"
                 placeholder="John Doe"
                 size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
