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
import type { DismissibleEmits }        from '@/Lib/UseDismissibleTransition';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { AlertProps }              from '@/UI/Components';
import { ref }                          from 'vue';
import { UseDismissibleTransition }     from '@/Lib/UseDismissibleTransition/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { FoAlertBody }                  from '@/UI/Components/Alert/Internal';

defineProps<AlertProps>();

const emit = defineEmits<DismissibleEmits>();

defineSlots<WithRequiredDefaultSlot>();

const isDismissed = ref<boolean>(false);
</script>
