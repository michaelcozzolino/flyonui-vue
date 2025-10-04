<template>
    <FoPagination v-model="page"
                  :length="totalPages"
    />
</template>

<script setup lang="ts">
import { FoPagination } from 'flyonui-vue';
import { ref }          from 'vue';

const page       = ref<number>(2);
const totalPages = ref<number>(3);
</script>
