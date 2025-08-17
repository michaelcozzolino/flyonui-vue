<template>
    <kbd class="kbd"
         :class="sizeClass"
    >
        <slot>
            {{ useRequiredSlotMessage('FoKeyboard') }}
        </slot>
    </kbd>
</template>

<script setup lang="ts">
import type { ComponentName }           from '@/Lib';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { KeyboardProps }           from '@/UI/Content';
import { useFlyonUIVueAppConfig }       from '@/Lib';
import { useSize }                      from '@/Lib/UseSize/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

const props = defineProps<KeyboardProps>();

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoKeyboard';

const { config } = useFlyonUIVueAppConfig();

const sizeClass = useSize(config, componentName, () => props.size);
</script>
