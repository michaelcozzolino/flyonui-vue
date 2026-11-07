<template>
    <FoRating v-model="rating"
              icon="tabler:heart-filled"
    />
</template>

<script setup lang="ts">
import { FoRating } from 'flyonui-vue';
import { ref }      from 'vue';

const rating = ref<number>(3);
</script>
