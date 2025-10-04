<template>
    <FoButton :class="roundedNoneClass"
              class="rtl:rotate-180"
              v-bind="props"
              :preset="preset"
              :shape="shape === 'circle' ? 'pilled' : 'rounded'"
    >
        <slot />
    </FoButton>
</template>

<script setup lang="ts">
import type { Shapeable }       from '@/Lib';
import type { ButtonProps }     from '@/UI/Components';
import type { PaginationShape } from '@/UI/Navigations';
import { FoButton }             from '@/UI/Components';
import { useRoundedNone }       from '@/UI/Navigations/Pagination/Internal';

const props = defineProps<Omit<ButtonProps, 'shape'> & Required<Shapeable<PaginationShape>>>();

const roundedNoneClass = useRoundedNone(() => props.shape);
</script>
