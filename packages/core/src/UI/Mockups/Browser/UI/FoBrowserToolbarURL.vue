<template>
    <div class="input"
         :class="borderClass"
    >
        <slot>
            {{ useRequiredSlotMessage('FoBrowserToolbarURL') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot }  from '@/Types';
import { computed, inject }              from 'vue';
import { useBorder }                     from '@/Lib/UseBorder/Internal';
import { useRequiredSlotMessage }        from '@/Lib/Utils/Internal';
import { isBorderedBrowserInjectionKey } from '@/UI/Mockups/Browser/Internal';

defineSlots<WithRequiredDefaultSlot>();

const isBordered = inject(isBorderedBrowserInjectionKey, computed((): false => false));

const borderClass = useBorder('FoBrowserToolbarURL', isBordered);
</script>
