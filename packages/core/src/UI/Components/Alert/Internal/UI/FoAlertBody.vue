<template>
    <div class="alert"
         :class="[
             colorClass,
             presetClass,
             isDismissible && 'flex items-center gap-4',
         ]"
         role="alert"
    >
        <slot>
            {{ useRequiredSlotMessage(componentName) }}
        </slot>

        <FoButton v-if="isDismissible"
                  class="ms-auto leading-none"
                  :color="color"
                  preset="text"
                  shape="square"
                  icon="tabler:x"
                  @click.prevent="emit('dismiss')"
        />
    </div>
</template>

<script setup lang="ts">
import type { ComponentName }           from '@/Lib';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { AlertEmits, AlertProps }  from '@/UI/Components';
import {  useFlyonUIVueAppConfig }      from '@/Lib';
import { useColor }                     from '@/Lib/UseColor/Internal';
import { usePreset }                    from '@/Lib/UsePreset/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import {  FoButton }                    from '@/UI/Components';

const props = defineProps<AlertProps>();

const emit = defineEmits<AlertEmits>();

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoAlert';
const { config }                   = useFlyonUIVueAppConfig();

const [
    colorClass,
    presetClass,
] = [
    useColor(config, componentName, () => props.color),
    usePreset(config, componentName, () => props.preset),
];
</script>
