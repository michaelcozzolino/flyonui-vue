<template>
    <UseDismissibleTransition>
        <FoAlertBody v-if="isDismissed === false"
                     v-bind="$props"
                     @dismiss="isDismissed = true; emit('dismiss');"
        >
            <slot>
                {{ useRequiredSlotMessage('FoAlert') }}
            </slot>
        </FoAlertBody>
    </UseDismissibleTransition>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import type { AlertEmits, AlertProps }  from '@/UI/Components';
import { UseDismissibleTransition }     from '@/Lib/UseDismissibleTransition/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { FoAlertBody }                  from '@/UI/Components/Alert/Internal';
import { ref }                          from 'vue';

defineProps<AlertProps>();

const emit = defineEmits<AlertEmits>();

defineSlots<WithRequiredDefaultSlot>();

const isDismissed = ref<boolean>(false);
</script>
