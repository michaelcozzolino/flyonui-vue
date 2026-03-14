<template>
    <div class="flex w-52 flex-col gap-4">
        <FoSkeleton class="h-32 w-full"
                    animation="loading"
        />

        <FoSkeleton class="h-4 w-28"
                    animation="loading"
        />

        <FoSkeleton class="h-4 w-full"
                    animation="loading"
        />

        <FoSkeleton class="h-4 w-full"
                    animation="loading"
        />
    </div>
</template>

<script setup lang="ts">
import { FoSkeleton } from 'flyonui-vue';
</script>
