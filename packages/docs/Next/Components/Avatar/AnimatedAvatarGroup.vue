<template>
    <FoAvatarGroup is-animated>
        <FoTooltip v-for="profile in profiles"
                   :key="profile.avatarUrl"
        >
            <FoAvatar :avatar="{ src: profile.avatarUrl, alt: 'avatar' }"
                      shape="circle"
                      size="large"
            />

            <template #body>
                {{ profile.name }}
            </template>
        </FoTooltip>
    </FoAvatarGroup>

    <FoAvatarGroup is-animated>
        <FoTooltip v-for="profile in profiles"
                   :key="profile.avatarUrl"
        >
            <FoAvatar :avatar="{ src: profile.avatarUrl, alt: 'avatar' }"
                      shape="circle"
                      size="large"
            />

            <template #body>
                {{ profile.name }}
            </template>
        </FoTooltip>

        <FoTooltip>
            <FoAvatar :avatar="{ text: '+9' }"
                      shape="circle"
                      size="large"
            />

            <template #body>
                9 more
            </template>
        </FoTooltip>
    </FoAvatarGroup>
</template>

<script setup lang="ts">
import { FoAvatar, FoAvatarGroup, FoTooltip } from 'flyonui-vue';
import { ref }                                from 'vue';

const profiles = ref<{ avatarUrl: string; name: string }[]>([
    {
        avatarUrl: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png',
        name:      'John Doe',
    },
    {
        avatarUrl: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png',
        name:      'Elliot Chen',
    },
    {
        avatarUrl: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png',
        name:      'Maya Singh',
    },
    {
        avatarUrl: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png',
        name:      'Jasmine Rivera',
    },
]);
</script>
