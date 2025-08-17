<template>
    <div class="flex items-center justify-center gap-1.5 text-base">
        <FoBadge class="size-2 p-0"
                 v-bind="props"
        />

        <slot />
    </div>
</template>

<script setup lang="ts">
import type { BadgeProps } from '@/UI/Components';
import { FoBadge }         from '@/UI/Components';

const props = defineProps<BadgeProps>();
</script>
