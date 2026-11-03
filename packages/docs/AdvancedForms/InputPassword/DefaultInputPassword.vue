<template>
    <FoInputPassword v-model="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
    />
</template>

<script setup lang="ts">
import { FoInputPassword } from 'flyonui-vue';
import { ref }             from 'vue';

const password = ref<string>('');
</script>
