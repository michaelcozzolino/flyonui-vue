<template>
    <div class="avatar-group -space-x-5"
         :class="isAnimated && 'pull-up'"
    >
        <slot>
            {{ useRequiredSlotMessage('FoAvatarGroup') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import type { AvatarGroupProps }        from '@/UI/Components';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineProps<AvatarGroupProps>();

defineSlots<WithRequiredDefaultSlot>();
</script>
