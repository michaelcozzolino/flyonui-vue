<template>
    <td>
        <slot />
    </td>
</template>

<script setup lang="ts">
import type { WithDefaultSlot } from '@/Types';

defineSlots<WithDefaultSlot>();
</script>
