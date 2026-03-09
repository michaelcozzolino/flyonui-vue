<template>
    <div>
        <FoLabel v-if="label !== undefined"
                 :for="id"
        >
            {{ label }}
        </FoLabel>

        <select :id="id"
                v-model="selectedOptions"
                class="select h-auto"
                :size="visibleOptions"
                :disabled="isDisabled"
                multiple
        >
            <FoSelectOption v-for="option in options"
                            :key="option.id"
                            :option="option"
            />
        </select>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number">
import type { MultipleSelectProps, SelectOption } from '@/UI/Forms';
import { useElementId }                           from '@/Lib/UseIdentifiable/Internal';
import { FoLabel }                                from '@/UI/Components/Label/Internal';
import { FoSelectOption }                         from '@/UI/Forms/Select/Internal';

const props = withDefaults(defineProps<MultipleSelectProps<T>>(), {
    visibleOptions: 4,
});

const selectedOptions = defineModel<SelectOption<T>[]>({ required: true });

const id = useElementId(() => props.id);
</script>
