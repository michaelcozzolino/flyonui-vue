<template>
    <div class="flex w-52 flex-col gap-4">
        <div class="flex items-center gap-4">
            <FoSkeleton class="h-16 w-16 shrink-0 rounded-full" />

            <div class="flex flex-col gap-4">
                <FoSkeleton class="h-4 w-20" />
                <FoSkeleton class="h-4 w-28" />
            </div>
        </div>

        <FoSkeleton class="h-32 w-full" />
    </div>
</template>

<script setup lang="ts">
import { FoSkeleton } from 'flyonui-vue';
</script>
