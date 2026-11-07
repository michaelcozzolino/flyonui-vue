<template>
    <FoRating v-model="rating"
              size="doubleExtraSmall"
    />

    <FoRating v-model="rating"
              size="extraSmall"
    />

    <FoRating v-model="rating"
              size="small"
    />

    <FoRating v-model="rating" />

    <FoRating v-model="rating"
              size="large"
    />

    <FoRating v-model="rating"
              size="extraLarge"
    />

    <FoRating v-model="rating"
              size="doubleExtraLarge"
    />
</template>

<script setup lang="ts">
import { FoRating } from 'flyonui-vue';
import { ref }      from 'vue';

const rating = ref<number>(3);
</script>
