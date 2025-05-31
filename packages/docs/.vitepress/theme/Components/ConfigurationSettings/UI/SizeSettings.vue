<template>
    <FoButton v-for="size in sizes"
              :key="size"
              :color="size === selectedSize ? 'warning' : 'primary'"
              size="extraSmall"
              @click="selectedSize = size"
    >
        {{ size }}
    </FoButton>
</template>

<script setup lang="ts">
import type { Size } from 'flyonui-vue';
import { FoButton }  from 'flyonui-vue';

const selectedSize = defineModel<Size>({ required: true });

const sizes: Size[] = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'];
</script>
