<template>
    <div class="flex flex-col">
        <FoLabel v-if="label !== undefined">
            {{ label }}
        </FoLabel>

        <FoInputText v-model.null="input"
                     :placeholder="placeholder"
                     :shape="shape"
                     :list="id"
                     :is-disabled="isDisabled"
                     :is-valid="isValid"
        />

        <datalist :id="id">
            <FoSelectOption v-for="option in options"
                            :key="option.id"
                            :option="option"
                            value-as-text
            />
        </datalist>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { DatalistProps, SelectOption } from '@/UI/Forms';
import { useElementId }                     from '@/Lib/UseIdentifiable/Internal';
import { FoLabel }                          from '@/UI/Components/Label/Internal';
import { FoInputText }                      from '@/UI/Forms';
import { FoSelectOption, onEmptyOptions }   from '@/UI/Forms/Select/Internal';
import { computed }                         from 'vue';

const props = withDefaults(defineProps<DatalistProps<T, K>>(), {
    isDisabled: undefined,
    isValid:    undefined,
});

const selectedOption = defineModel<K | null>({ required: true });

const id = useElementId(() => props.id);

const input = computed({
    get: (): string | null => selectedOption.value?.text ?? null,
    set: (newOptionText: string | null) => {
        if (newOptionText === null) {
            selectedOption.value = null;

            return;
        }

        const newOption = props.options.find((option: K): boolean => option.text === newOptionText);

        if (newOption === undefined) {
            return;
        }

        selectedOption.value = newOption;
    },
});

onEmptyOptions(() => props.options);
</script>
