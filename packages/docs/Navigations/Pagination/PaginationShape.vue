<template>
    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  shape="square"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  shape="circle"
    />
</template>

<script setup lang="ts">
import { FoPagination } from 'flyonui-vue';
import { ref }          from 'vue';

const page       = ref<number>(2);
const totalPages = ref<number>(3);
</script>
