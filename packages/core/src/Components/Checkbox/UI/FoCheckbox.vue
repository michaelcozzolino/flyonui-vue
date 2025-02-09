<template>
    <div :class="[
             helperText === undefined && 'items-center',
             gapClass,
         ]"
         class="flex"
    >
        <input :id="id"
               v-model="checked"
               type="checkbox"
               class="checkbox"
               :class="[
                   colorClass,
                   sizeClass,
                   validityClass,
               ]"
               :aria-label="label ?? (isDisabled ? 'disabled checkbox' : 'checkbox')"
               :disabled="isDisabled"
               :indeterminate.prop="isIndeterminate"
        >

        <FoLabel v-if="label !== undefined"
                 :id="id"
                 :class="helperText && '-mt-1 pt-0'"
                 class="cursor-pointer flex-col items-start "
        >
            <template v-if="helperText !== undefined">
                <span class="label-text text-base">
                    {{ label }}
                </span>

                <span class="label-text-alt">
                    {{ helperText }}
                </span>
            </template>

            <template v-else>
                {{ label }}
            </template>
        </FoLabel>
    </div>
</template>

<script lang="ts" setup>
import type { CheckboxProps }                                      from '@/Components/Checkbox/Types/Checkbox';
import { isInCheckboxGroupInjectionKey }                           from '@/Components/Checkbox/Lib/InjectionKeys';
import { FoLabel }                                                 from '@/Components/Label';
import { useValidity }                                             from '@/Shared/Lib/UseClass';
import { useColor, useSize }                                       from '@/Shared/Lib/UseElementClass';
import { availableColors, type Color }                             from '@/Shared/Types/Variants';
import { nanoid }                                                  from 'nanoid';
import { computed, inject, type MaybeRefOrGetter, toValue, watch } from 'vue';

const props = withDefaults(defineProps<CheckboxProps>(), {
    color:      'default',
    size:       'default',
    isDisabled: false,
    isValid:    undefined,
});

const elementName       = 'checkbox';
const id                = nanoid();
const isInCheckboxGroup = inject(isInCheckboxGroupInjectionKey, false);

const checked         = defineModel({ required: true, type: Boolean });
const isIndeterminate = defineModel('isIndeterminate', { type: Boolean });

const [
    colorClass,
    sizeClass,
    validityClass,
] = [
    useCheckboxColor(() => props.color),
    useSize(elementName, () => props.size),
    useValidity(() => props.isValid),
];

const gapClass = computed(() => {
    if (isInCheckboxGroup || props.helperText !== undefined) {
        return 'gap-2';
    }

    return 'gap-1';
});

function useCheckboxColor(color: MaybeRefOrGetter<Color | string>) {
    return isColor(color)
        ? useColor(elementName, color)
        : computed(() => toValue(color));
}

function isColor(color: MaybeRefOrGetter<Color | string>): color is MaybeRefOrGetter<Color> {
    return availableColors.includes(toValue(color) as Color);
}

watch(isIndeterminate, (newValue: boolean | undefined) => {
    if (newValue) {
        checked.value = false;
    }
}, { immediate: true });
</script>
