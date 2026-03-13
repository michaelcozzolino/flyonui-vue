<template>
    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }" />

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
