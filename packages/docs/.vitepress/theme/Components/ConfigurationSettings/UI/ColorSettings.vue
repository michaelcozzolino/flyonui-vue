<template>
    <FoButton v-for="color in availableColors"
              :key="color"
              :color="color"
              :icon="selectedColor === color ? 'ep:select' : ''"
              shape="circle"
              size="extraSmall"
              @click="selectedColor = color"
    />
</template>

<script setup lang="ts">
import type { Color } from 'flyonui-vue';
import { FoButton }   from 'flyonui-vue';

const selectedColor = defineModel<Color>({ required: true });

const availableColors: Color[] = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
</script>
