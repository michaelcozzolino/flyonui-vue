<template>
    <FoBrowser class="bg-base-300/40">
        <template #toolbar>
            <FoBrowserToolbarURL class="bg-base-300/40">
                https://flyonui-vue.com
            </FoBrowserToolbarURL>
        </template>

        <div class="flex justify-center px-4 py-16 bg-base-200">
            Hello!
        </div>
    </FoBrowser>
</template>

<script setup lang="ts">
import { FoBrowser, FoBrowserToolbarURL } from 'flyonui-vue';
</script>
