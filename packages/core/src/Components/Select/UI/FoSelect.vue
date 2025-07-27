<template>
    <!--    todo: missing hidden label, multiple options  -->
    <div v-if="options.length"
         :class="defaultLabel?.type === 'floating' && floatingLabelClass"
    >
        <FoLabel v-if="defaultLabel && defaultLabel.type === 'text'"
                 :for="id"
                 :component-name="componentName"
                 :type="defaultLabel.type"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <select :id="id"
                v-model="selectedOption"
                class="select"
                :class="[shapeClass, sizeClass, validityClass]"
                :disabled="isDisabled"
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
        >
            {{ defaultLabel.text }}
        </FoLabel>
    </div>
</template>

<script setup lang="ts" generic="T extends string | number, K extends SelectOption<T>">
import type { SelectOption, SelectProps }          from '@/Components/Select';
import type { ComponentName }                      from '@/Shared/Utils/Internal';
import { FoHelperText, usePositionableHelperText } from '@/Components/HelperText/Internal';
import { FoLabel, useLabel }                       from '@/Components/Label/Internal';
import { isSelectOptionGroup }                     from '@/Components/Select/Internal';
import { onEmptyOptions }                          from '@/Components/Select/Internal/Lib/OnEmptyOptions.ts';
import FoSelectOption                              from '@/Components/Select/Internal/UI/FoSelectOption.vue';
import { useFloatingLabel }                        from '@/Shared/UseFloatingLabel/Internal';
import { useFlyonUIVueAppConfig }                  from '@/Shared/UseFlyonUIVueAppConfig';
import { useShape }                                from '@/Shared/UseShape/Internal';
import { useSize }                                 from '@/Shared/UseSize/Internal';
import { useValidity }                             from '@/Shared/UseValidity/Internal';
import { useId, watchEffect }                      from 'vue';

const props = withDefaults(defineProps<SelectProps<T, K>>(), {
    isDisabled: undefined,
    isValid:    undefined,
});

const id = useId();

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
        const option = props.options[0];

        if (isSelectOptionGroup(option)) {
            const optionsByGroup = option.options;

            if (optionsByGroup.length === 0) {
                throw new Error(`No option given for group ${option.label}.`);
            }

            selectedOption.value = optionsByGroup[0];

            return;
        }

        selectedOption.value = option;
    }
});
</script>
