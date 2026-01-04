<template>
    <option :disabled="option.disabled"
            :value="valueAsText ? option.text : option"
    >
        {{ option.text }}
    </option>
</template>

<script setup lang="ts" generic="T extends number | string">
import type { SelectOptionProps } from '@/UI/Forms/Select/Internal/Types/Select.ts';

defineProps<SelectOptionProps<T>>();
</script>
