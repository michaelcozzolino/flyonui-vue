<template>
    <div class="mockup-window"
         :class="borderClass"
    >
        <slot>
            {{ useRequiredSlotMessage('FoWindow') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import type { WindowProps }             from '@/UI/Mockups/Window/Types';
import { useBorder }                    from '@/Lib/UseBorder/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

const props = defineProps<WindowProps>();

defineSlots<WithRequiredDefaultSlot>();

const borderClass = useBorder('FoWindow', (): boolean | undefined => props.isBordered);
</script>
