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
import type { CheckboxGroupProps }       from '@/Components/Checkbox';
import type { WithRequiredDefaultSlot }  from '@/Shared/Utils/Types/Slots';
import { isInCheckboxGroupInjectionKey } from '@/Components/Checkbox/Internal';
import { useOrientation }                from '@/Shared/UseOrientation/Internal';
import { useRequiredSlotMessage }        from '@/Shared/Utils/Internal';
import { provide }                       from 'vue';

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    orientation: 'horizontal',
});

defineSlots<WithRequiredDefaultSlot>();

provide(isInCheckboxGroupInjectionKey, true);

const orientationClass = useOrientation('FoCheckboxGroup', () => props.orientation);
</script>
