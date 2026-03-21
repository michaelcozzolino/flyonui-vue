<template>
    <FoHeading class="modal-title"
               :class="isTransparent && 'text-white'"
               :level="headingLevel ?? '3'"
    >
        <slot>
            {{ useRequiredSlotMessage('FoModalTitle') }}
        </slot>
    </FoHeading>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot }   from '@/Types';
import type { ModalTitleProps }           from '@/UI/Overlays';
import { useRequiredSlotMessage }         from '@/Lib/Utils/Internal';
import { FoHeading  }                     from '@/UI/Content';
import { isModalTransparentInjectionKey } from '@/UI/Overlays/Modal/Internal';
import { computed, inject }               from 'vue';

defineProps<ModalTitleProps>();

defineSlots<WithRequiredDefaultSlot>();

const isTransparent = inject(isModalTransparentInjectionKey, computed(() => false));
</script>
