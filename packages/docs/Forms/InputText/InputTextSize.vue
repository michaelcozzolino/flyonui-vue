<template>
    <div class="max-w-sm">
        <FoInputText v-model="input"
                     placeholder="John doe"
                     size="extraSmall"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     placeholder="John doe"
                     size="small"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     placeholder="John doe"
        />
    </div>

    <div class="max-w-sm">
        <FoInputText v-model="input"
                     placeholder="John doe"
                     size="large"
        />
    </div>
    <div class="max-w-sm">
        <FoInputText v-model="input"
                     placeholder="John doe"
                     size="extraLarge"
        />
    </div>
</template>

<script setup lang="ts">
import { FoInputText } from 'flyonui-vue';
import { ref }         from 'vue';

const input = ref<string>('');
</script>
