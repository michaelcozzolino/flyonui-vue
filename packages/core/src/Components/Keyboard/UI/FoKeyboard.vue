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
import type { KeyboardProps }     from '@/Components';
import type { ComponentName }     from '@/Shared/Utils/Internal';
import type { VNode }             from 'vue';
import { useFlyonUIVueAppConfig } from '@/Shared';
import { useSize }                from '@/Shared/UseSize/Internal';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';

const props = defineProps<KeyboardProps>();

defineSlots<{
    default: () => VNode[];
}>();

const componentName: ComponentName = 'FoKeyboard';

const { config } = useFlyonUIVueAppConfig();

const sizeClass = useSize(config, componentName, () => props.size);
</script>
