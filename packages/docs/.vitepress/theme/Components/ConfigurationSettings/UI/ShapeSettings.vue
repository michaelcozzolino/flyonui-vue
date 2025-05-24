<template>
    <FoButton v-for="shape in shapes"
              :key="shape"
              :color="shape === selectedShape ? 'warning' : 'primary'"
              size="extraSmall"
              @click="selectedShape = shape"
    >
        {{ shape }}
    </FoButton>
</template>

<script setup lang="ts">
import type { Shape } from 'flyonui-vue';
import { FoButton }   from 'flyonui-vue';

const selectedShape = defineModel<Shape>({ required: true });

const shapes: Shape[] = ['rounded', 'pilled'];
</script>
