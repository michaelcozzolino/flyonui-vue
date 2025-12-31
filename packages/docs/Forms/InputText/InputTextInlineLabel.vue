<template>
    <div class="max-w-sm">
        <FoInputText v-model="name"
                     :label="{ text: 'Name', type: 'inline' }"
                     placeholder="FlyonUI"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="email"
                     :label="{ text: 'Email', type: 'inline' }"
                     placeholder="admin@site.com"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const name  = ref<string>('');
const email = ref<string>('');
</script>
