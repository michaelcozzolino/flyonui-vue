<template>
    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name' }"
                     placeholder="John Doe"
                     :helper-text="{ text: 'Helper text' }"
                     is-valid
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     :helper-text="{ text: 'Helper text' }"
                     is-valid
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name' }"
                     placeholder="John Doe"
                     :helper-text="{ text: 'Helper text' }"
                     :is-valid="false"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John Doe"
                     :helper-text="{ text: 'Helper text' }"
                     :is-valid="false"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
