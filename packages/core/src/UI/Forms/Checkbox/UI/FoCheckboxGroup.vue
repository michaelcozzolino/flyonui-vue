<template>
    <div class="flex"
         :class="orientationClass"
    >
        <slot>
            {{ useRequiredSlotMessage('FoCheckboxGroup') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { Orientation }               from '@/Lib';
import type { WithRequiredDefaultSlot }   from '@/Types';
import type { CheckboxGroupProps }        from '@/UI/Forms/Checkbox';
import { provide }                        from 'vue';
import { useOrientation }                 from '@/Lib/UseOrientation/Internal';
import { useRequiredSlotMessage }         from '@/Lib/Utils/Internal';
import { isCheckableInGroupInjectionKey } from '@/UI/Forms/Checkbox/Internal';

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    orientation: 'horizontal',
});

defineSlots<WithRequiredDefaultSlot>();

provide(isCheckableInGroupInjectionKey, true);

const orientationClass = useOrientation('FoCheckboxGroup', (): Orientation => props.orientation);
</script>
