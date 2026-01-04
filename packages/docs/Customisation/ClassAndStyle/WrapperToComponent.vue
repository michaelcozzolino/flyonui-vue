<template>
    <div class="w-[500px]">
        <FoInputText v-model="name"
                     class="bg-blue-700"
                     label="Name"
                     placeholder="Enter your name..."
                     helper-text="your name here"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const name = ref<string>('');
</script>
