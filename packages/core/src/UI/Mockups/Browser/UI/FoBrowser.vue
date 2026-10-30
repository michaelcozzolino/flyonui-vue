<template>
    <div class="mockup-browser"
         :class="borderClass"
    >
        <div class="mockup-browser-toolbar">
            <slot name="toolbar">
                {{ useRequiredSlotMessage('FoBrowser') }}
            </slot>
        </div>

        <slot>
            {{ useRequiredSlotMessage('FoBrowser', '', 'body') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { BrowserProps }             from '@/UI/Mockups/Browser/Types';
import { computed, provide }             from 'vue';
import { useBorder }                     from '@/Lib/UseBorder/Internal';
import { useRequiredSlotMessage }        from '@/Lib/Utils/Internal';
import { isBorderedBrowserInjectionKey } from '@/UI/Mockups/Browser/Internal';

const props = withDefaults(defineProps<BrowserProps>(), {
    isBordered: false,
});

provide(isBorderedBrowserInjectionKey, computed((): boolean => props.isBordered));

const borderClass = useBorder('FoBrowser', (): boolean => props.isBordered);
</script>
