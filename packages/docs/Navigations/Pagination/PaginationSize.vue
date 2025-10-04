<template>
    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  size="extraSmall"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  size="small"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  size="large"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoPagination } from 'flyonui-vue';
import { ref }          from 'vue';

const page       = ref<number>(2);
const totalPages = ref<number>(3);
</script>
