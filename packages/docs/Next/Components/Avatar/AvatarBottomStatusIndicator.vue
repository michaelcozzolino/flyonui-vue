<template>
    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              :indicator="{ status: 'online', placement: 'bottom' }"
              shape="circle"
              size="small"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              :indicator="{ status: 'away', placement: 'bottom' }"
              shape="circle"
              size="medium"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              :indicator="{ status: 'busy', placement: 'bottom' }"
              shape="circle"
              size="large"
    />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              :indicator="{ status: 'offline', placement: 'bottom' }"
              shape="circle"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
