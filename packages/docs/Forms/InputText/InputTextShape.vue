<template>
    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name' }"
                     placeholder="John doe"
                     shape="pilled"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     :label="{ text: 'Full Name', type: 'floating' }"
                     placeholder="John doe"
                     shape="pilled"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
