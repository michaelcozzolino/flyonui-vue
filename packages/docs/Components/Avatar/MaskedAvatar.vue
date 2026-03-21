<template>
    <FoAvatar v-mask="decagonMaskClass"
              :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              size="large"
    />

    <FoAvatar v-mask="hexagonMaskClass"
              :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              size="large"
    />
    <FoAvatar v-mask="heartMaskClass"
              :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              size="large"
    />
</template>

<script setup lang="ts">
import { decagonMaskClass, FoAvatar, heartMaskClass, hexagonMaskClass } from 'flyonui-vue';
</script>
