<template>
    <FoAvatar :avatar="{ text: 'cl', color: 'neutral', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'primary', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'secondary', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'accent', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'info', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'success', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'warning', preset: 'outline' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'error', preset: 'outline' }"
              shape="circle"
              size="medium"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
