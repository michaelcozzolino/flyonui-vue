<template>
    <FoRating v-model="rating"
              disabled
    />
</template>

<script setup lang="ts">
import { FoRating } from 'flyonui-vue';
import { ref }      from 'vue';

const rating = ref<number>(3);
</script>
