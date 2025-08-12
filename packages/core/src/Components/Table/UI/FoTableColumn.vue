<template>
    <td>
        <slot />
    </td>
</template>

<script setup lang="ts">
import type { WithDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';

defineSlots<WithDefaultSlot>();
</script>
