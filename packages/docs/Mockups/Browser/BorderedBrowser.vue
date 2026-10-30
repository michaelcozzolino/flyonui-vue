<template>
    <FoBrowser is-bordered>
        <template #toolbar>
            <FoBrowserToolbarURL>
                https://flyonui-vue.com
            </FoBrowserToolbarURL>
        </template>

        <div class="flex justify-center px-4 py-16 border-t border-neutral/30">
            Hello!
        </div>
    </FoBrowser>
</template>

<script setup lang="ts">
import { FoBrowser, FoBrowserToolbarURL } from 'flyonui-vue';
</script>
