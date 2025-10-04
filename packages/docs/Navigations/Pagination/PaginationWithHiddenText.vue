<template>
    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="never"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  hide-text="always"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="sm"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="md"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="lg"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="lg"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="xl"
    />

    <FoPagination v-model="page"
                  :length="totalPages"
                  preset="soft"
                  :icon="{ previous: 'tabler:chevron-left', next: 'tabler:chevron-right' }"
                  hide-text="2xl"
    />
</template>

<script setup lang="ts">
import { FoPagination } from 'flyonui-vue';
import { ref }          from 'vue';

const page       = ref<number>(2);
const totalPages = ref<number>(3);
</script>
