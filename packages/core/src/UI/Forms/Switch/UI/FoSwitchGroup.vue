<template>
    <div class="flex flex-col"
         :class="orientationClass"
    >
        <slot>
            {{ useRequiredSlotMessage('FoSwitchGroup') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { Orientation }               from '@/Lib';
import type { WithRequiredDefaultSlot }   from '@/Types';
import type { SwitchGroupProps }          from '@/UI/Forms';
import { provide }                        from 'vue';
import { useOrientation }                 from '@/Lib/UseOrientation/Internal';
import { useRequiredSlotMessage }         from '@/Lib/Utils/Internal';
import { isCheckableInGroupInjectionKey } from '@/UI/Forms/Checkbox/Internal';

const props = withDefaults(defineProps<SwitchGroupProps>(), {
    orientation: 'horizontal',
});

defineSlots<WithRequiredDefaultSlot>();

provide(isCheckableInGroupInjectionKey, true);

const orientationClass = useOrientation('FoSwitchGroup', (): Orientation => props.orientation);
</script>
