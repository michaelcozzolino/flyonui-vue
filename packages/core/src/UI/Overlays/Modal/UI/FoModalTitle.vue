<template>
    <FoHeading class="modal-title"
               :class="isTransparent && 'text-white'"
               :level="headingLevel ?? '3'"
    >
        <slot />
    </FoHeading>
</template>

<script setup lang="ts">
import type { HeadingLevel }              from '@/UI/Content';
import { FoHeading  }                     from '@/UI/Content';
import { isModalTransparentInjectionKey } from '@/UI/Overlays/Modal/Internal';
import { computed, inject }               from 'vue';

interface Props {
    headingLevel?: HeadingLevel;
}

defineProps<Props>();

const isTransparent = inject(isModalTransparentInjectionKey, computed(() => false));
</script>
