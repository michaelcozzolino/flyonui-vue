<template>
    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     size="extraSmall"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     size="small"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     size="large"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     size="extraLarge"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
