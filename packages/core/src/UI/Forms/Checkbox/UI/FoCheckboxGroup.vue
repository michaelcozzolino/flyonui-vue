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
import type { WithRequiredDefaultSlot }  from '@/Types';
import type { CheckboxGroupProps }       from '@/UI/Forms/Checkbox';
import { useOrientation }                from '@/Lib/UseOrientation/Internal';
import { useRequiredSlotMessage }        from '@/Lib/Utils/Internal';
import { isInCheckboxGroupInjectionKey } from '@/UI/Forms/Checkbox/Internal';
import { provide }                       from 'vue';

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    orientation: 'horizontal',
});

defineSlots<WithRequiredDefaultSlot>();

provide(isInCheckboxGroupInjectionKey, true);

const orientationClass = useOrientation('FoCheckboxGroup', () => props.orientation);
</script>
