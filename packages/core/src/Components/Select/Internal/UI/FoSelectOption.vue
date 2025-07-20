<template>
    <option :disabled="option.isDisabled"
            :value="valueAsText ? option.text : option"
    >
        {{ option.text }}
    </option>
</template>

<script setup lang="ts" generic="T extends number | string">
import type { SelectOptionProps } from '@/Components/Select/Internal/Types/Select.ts';

defineProps<SelectOptionProps<T>>();
</script>
