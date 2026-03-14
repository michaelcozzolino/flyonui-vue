<template>
    <FoAvatarGroup>
        <FoAvatar v-for="avatarUrl in avatarUrls"
                  :key="avatarUrl"
                  :avatar="{ src: avatarUrl, alt: 'avatar' }"
                  shape="circle"
                  size="large"
        />
    </FoAvatarGroup>

    <FoAvatarGroup>
        <FoAvatar v-for="avatarUrl in avatarUrls"
                  :key="avatarUrl"
                  :avatar="{ src: avatarUrl, alt: 'avatar' }"
                  shape="circle"
                  size="large"
        />

        <FoAvatar :avatar="{ text: '+9' }"
                  shape="circle"
                  size="large"
        />
    </FoAvatarGroup>
</template>

<script setup lang="ts">
import { FoAvatar, FoAvatarGroup } from 'flyonui-vue';
import { ref }                     from 'vue';

const avatarUrls = ref<string[]>([
    'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png',
    'https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png',
    'https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png',
    'https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png',
]);
</script>
