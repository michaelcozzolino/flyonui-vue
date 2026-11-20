<template>
    <div class="flex items-center gap-x-1">
        <FoProgressStepBar v-for="step in steps"
                           :key="step"
                           :color="color"
                           :is-complete="isComplete(step)"
                           :value="value"
        />
    </div>
</template>

<script setup lang="ts">
import type { ProgressStepProps } from '@/UI/Components';
import { FoProgressStepBar }      from '@/UI/Components/Progress/Internal';

const props = defineProps<ProgressStepProps>();

function isComplete(step: number): boolean {
    return (step * 100 / props.steps) <= props.value;
}
</script>
