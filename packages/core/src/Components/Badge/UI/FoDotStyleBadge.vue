<template>
    <div class="flex items-center justify-center gap-1.5 text-base">
        <FoBadge class="size-2 p-0"
                 v-bind="props"
        />

        <slot />
    </div>
</template>

<script setup lang="ts">
import { type BadgeProps, FoBadge } from '@/Components/Badge';

const props = defineProps<BadgeProps>();
</script>
