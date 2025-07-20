<template>
    <div class="flex flex-col">
        <FoLabel v-if="label !== undefined">
            {{ label }}
        </FoLabel>

        <FoInputText v-model="input"
                     :placeholder="placeholder"
                     :shape="shape"
                     :list="id"
                     :is-disabled="isDisabled"
        />

        <datalist :id="id"
                  :class="validityClass"
        >
            <FoSelectOption v-for="option in options"
                            :key="option.id"
                            :option="option"
                            value-as-text
            />
        </datalist>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { DatalistProps, SelectOption } from '@/Components';
import { FoInputText }                      from '@/Components';
import { FoLabel }                          from '@/Components/Label/Internal';
import { FoSelectOption, onEmptyOptions }   from '@/Components/Select/Internal';
import { useId }                            from '@/Shared/UseIdentifiable/Internal';
import { useValidity }                      from '@/Shared/UseValidity/Internal';
import { computed }                         from 'vue';

const props = withDefaults(defineProps<DatalistProps<T, K>>(), {
    isDisabled: undefined,
    isValid:    undefined,
});

const selectedOption = defineModel<K | null>({ required: true });

const id = useId(() => props.id);

const input = computed({
    get: (): string | null => selectedOption.value?.text ?? null,
    set: (newOptionText: string | null) => {
        const newOption = props.options.find((option: K): boolean => option.text === newOptionText);

        if (newOption === undefined) {
            return;
        }

        selectedOption.value = newOption;
    },
});

const validityClass = useValidity(() => props.isValid);

onEmptyOptions(() => props.options);
</script>
