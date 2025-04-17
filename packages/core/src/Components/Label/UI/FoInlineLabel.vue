<template>
    <FoLabel type="inline"
             v-bind="$props"
    >
        <slot />
    </FoLabel>
</template>

<script setup lang="ts">
import type { LabelProps } from '@/Components/Label/Internal/Types';
import { FoLabel }         from '@/Components/Label/Internal';

type Props = Omit<LabelProps, 'type'>;

defineProps<Props>();
</script>
