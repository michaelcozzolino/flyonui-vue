<template>
    <FoLabel class="custom-option p-0">
        <span class="w-full">
            <img :src="image.src"
                 :alt="image.alt"
            >
        </span>

        <input v-model="checkedValue"
               class="radio hidden"
               type="radio"
               :value="value"
        >
    </FoLabel>
</template>

<script setup lang="ts">
import type { ImageRadioProps } from '@/UI/Forms';
import { FoLabel }              from '@/UI/Components/Label/Internal';

defineProps<ImageRadioProps>();

/** The value of the checked image */
const checkedValue = defineModel<string>({ required: true });
</script>
