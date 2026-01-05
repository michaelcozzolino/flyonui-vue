<template>
    <div dir="rtl">
        <FoInputText v-model="name"
                     label="name"
                     placeholder="Enter your name..."
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const name = ref<string>('');
</script>
