<template>
    <div class="diff aspect-video">
        <div class="diff-item-1">
            <slot name="first">
                {{ useRequiredSlotMessage(componentName, '', 'first') }}
            </slot>
        </div>

        <div class="diff-item-2">
            <slot name="second">
                {{ useRequiredSlotMessage(componentName, '', 'second') }}
            </slot>
        </div>

        <div class="diff-resizer" />
    </div>
</template>

<script setup lang="ts">
import type { ComponentName }     from '@/Lib';
import type { Slot }              from 'vue';
import { useRequiredSlotMessage } from '@/Lib/Utils/Internal';

defineSlots<{
    /** The first element whose differences should be shown */
    first: Slot;

    /** The second element whose differences should be shown */
    second: Slot;
}>();

const componentName: ComponentName = 'FoDiff';
</script>
