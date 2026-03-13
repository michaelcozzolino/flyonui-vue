<template>
    <div v-if="options.length"
         :class="[
             icon && useIcon && 'select',
             icon === undefined && floatingLabelClass,
         ]"
    >
        <FoIcon v-if="icon && useIcon"
                class="text-base-content/80 my-auto shrink-0"
                :icon="icon"
                size="small"
        />

        <FoLabel v-if="defaultLabel && defaultLabel.type === 'text'"
                 :for="id"
                 :component-name="componentName"
                 :type="defaultLabel.type"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <select :id="id"
                v-model="selectedOption"
                class="select"
                :class="[
                    icon === undefined && floatingLabelClass,
                    shapeClass,
                    sizeClass,
                    validityClass,
                ]"
                :disabled="disabled"
                aria-label="select"
        >
            <option v-if="defaultLabel?.type === 'inline'"
                    :value="null"
            >
                {{ defaultLabel.text }}
            </option>

            <template v-for="optionOrGroup in options">
                <optgroup v-if="isSelectOptionGroup(optionOrGroup)"
                          :key="optionOrGroup.label"
                          :label="optionOrGroup.label"
                >
                    <FoSelectOption v-for="option in optionOrGroup.options"
                                    :key="option.id"
                                    :option="option"
                    >
                        {{ option.text }}
                    </FoSelectOption>
                </optgroup>

                <FoSelectOption v-else
                                :key="optionOrGroup.id"
                                :option="optionOrGroup"
                />
            </template>
        </select>

        <FoHelperText v-if="selectHelperText !== undefined"
                      :position="selectHelperText.position"
        >
            {{ selectHelperText.text }}
        </FoHelperText>

        <FoLabel v-if="defaultLabel && defaultLabel.type === 'floating'"
                 :for="id"
                 :component-name="componentName"
                 :type="defaultLabel.type"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { ComponentName } from '@/Lib';
import type { LabelType }     from '@/UI/Components';

import type { SelectOption, SelectProps } from '@/UI/Forms';
import { useFlyonUIVueAppConfig }         from '@/Lib';
import { useFloatingLabel }               from '@/Lib/UseFloatingLabel/Internal';
import { useElementId }                   from '@/Lib/UseIdentifiable/Internal';
import { useShape }                       from '@/Lib/UseShape/Internal';

import { useSize }                                 from '@/Lib/UseSize/Internal';
import { useValidity }                             from '@/Lib/UseValidity/Internal';
import { FoHelperText, usePositionableHelperText } from '@/UI/Components/HelperText/Internal';
import { FoLabel, useLabel }                       from '@/UI/Components/Label/Internal';
import { FoIcon }                                  from '@/UI/Customization';
import { isSelectOptionGroup }                     from '@/UI/Forms/Select/Internal';
import { onEmptyOptions }                          from '@/UI/Forms/Select/Internal/Lib/OnEmptyOptions';
import FoSelectOption                              from '@/UI/Forms/Select/Internal/UI/FoSelectOption.vue';
import { computed, watchEffect }                   from 'vue';

const props = withDefaults(defineProps<SelectProps<T, K>>(), {
    disabled: undefined,
    isValid:  undefined,
});

const id = useElementId(() => props.id);

const selectedOption = defineModel<SelectOption<T> | null>({ required: true });

const componentName: ComponentName = 'FoSelect';

const { config } = useFlyonUIVueAppConfig();

const defaultLabel = useLabel(
    config,
    componentName,
    () => props.label,
);

const selectHelperText = usePositionableHelperText(
    config,
    componentName,
    () => props.helperText,
);

const useIcon = computed((): boolean => {
    return (['inline', 'floating'] as (LabelType | undefined)[]).includes(defaultLabel.value?.type);
});

const [
    floatingLabelClass,
    shapeClass,
    sizeClass,
    validityClass,
] = [
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useShape(config, componentName, () => props.shape),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];

onEmptyOptions(() => props.options);

watchEffect(() => {
    /**
     * when no option is selected and the label is not the null option, the selected one will be the first.
     * So that in case the developer is using the useSelectedOption composable where allowNull is true, but there is no
     * way to automatically select the null option, it will still get one option back that is the first one.
     */
    if (selectedOption.value === null && defaultLabel.value?.type !== 'inline') {
        const firstOption = props.options.at(0);

        if (firstOption === undefined) {
            throw new Error(`No option given.`);
        }

        if (isSelectOptionGroup(firstOption)) {
            const firstOptionByGroup = firstOption.options.at(0);

            if (firstOptionByGroup === undefined) {
                throw new Error(`No option given for group ${firstOption.label}.`);
            }

            selectedOption.value = firstOptionByGroup;

            return;
        }

        selectedOption.value = firstOption;
    }
});
</script>
