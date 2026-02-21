<template>
    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="circle"
              size="medium"
    >
        <template #indicator>
            <svg class="size-4"
                 viewBox="0 0 60 60"
                 preserveAspectRatio="xMidYMid meet"
            >
                <path d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12" fill="#36C5F0" />
                <path d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z" fill="#2EB67D" />
                <path d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12" fill="#ECB22E" />
                <path d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z" fill="#E01E5A" />
            </svg>
        </template>
    </FoAvatar>

    <FoAvatar :avatar="{ src: 'https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png', alt: 'Avatar 1' }"
              shape="rounded"
              size="medium"
    >
        <template #indicator>
            <svg aria-hidden="true"
                 class="size-4"
                 viewBox="0 0 16 16"
                 width="24"
            >
                <path fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
            </svg>
        </template>
    </FoAvatar>
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
