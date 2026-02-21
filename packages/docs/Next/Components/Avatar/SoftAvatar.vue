<template>
    <FoAvatar :avatar="{ text: 'cl', color: 'neutral', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'primary', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'secondary', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'accent', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'info', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'success', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'warning', preset: 'soft' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'error', preset: 'soft' }"
              shape="circle"
              size="medium"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
