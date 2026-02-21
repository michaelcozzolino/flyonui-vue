<template>
    <FoAvatar :avatar="{ text: 'cl', color: 'neutral' }"
              shape="circle"
              size="extraSmall"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'neutral' }"
              shape="circle"
              size="small"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'neutral' }"
              shape="circle"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'neutral' }"
              shape="circle"
              size="large"
    />

    <FoAvatar :avatar="{ text: 'cl', color: 'neutral' }"
              shape="circle"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
