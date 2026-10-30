<template>
    <div class="mockup-browser"
         :class="borderClass"
    >
        <div class="mockup-browser-toolbar">
            <slot name="toolbar">
                {{ useRequiredSlotMessage('FoBrowser', '', 'toolbar') }}
            </slot>
        </div>

        <slot>
            {{ useRequiredSlotMessage('FoBrowser') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { Slot }                     from 'vue';
import type { WithRequiredDefaultSlot }  from '@/Types';
import type { BrowserProps }             from '@/UI/Mockups/Browser/Types';
import { computed, provide }             from 'vue';
import { useBorder }                     from '@/Lib/UseBorder/Internal';
import { useRequiredSlotMessage }        from '@/Lib/Utils/Internal';
import { isBorderedBrowserInjectionKey } from '@/UI/Mockups/Browser/Internal';

const props = defineProps<BrowserProps>();

defineSlots<WithRequiredDefaultSlot & {
    /** Allows to show the url or other browser icons or data */
    toolbar: Slot;
}>();

provide(isBorderedBrowserInjectionKey, computed((): boolean => props.isBordered));

const borderClass = useBorder('FoBrowser', (): boolean => props.isBordered);
</script>
