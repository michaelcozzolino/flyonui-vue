<template>
    <FoBrowser class="bg-base-300/40">
        <template #toolbar>
            <FoBrowserToolbarURL class="bg-base-200">
                https://flyonui-vue.com
            </FoBrowserToolbarURL>
        </template>

        <div class="flex h-80 justify-center">
            <img class="w-full object-cover"
                 src="https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png"
                 alt="browser background"
            >
        </div>
    </FoBrowser>
</template>

<script setup lang="ts">
import { FoBrowser, FoBrowserToolbarURL } from 'flyonui-vue';
</script>
