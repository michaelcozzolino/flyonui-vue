<template>
    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
              size="extraSmall"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
              size="small"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
              size="large"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
