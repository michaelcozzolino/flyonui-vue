<template>
    <div :class="defaultLabel && defaultLabel.type !== 'text' && 'relative'">
        <FoLabel v-if="defaultLabel?.type === 'text'"
                 :for="id"
                 :element="elementName"
                 :type="defaultLabel.type"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <!--        todo: add possibility for native attributes -->
        <textarea :id="id"
                  v-model="input"
                  :placeholder="placeholder"
                  class="textarea"
                  :class="[labelTypeClass, validityClass]"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
        />

        <FoLabel v-if="defaultLabel && (['floating', 'filled'] as TextareaLabelType[]).includes(defaultLabel.type)"
                 :for="id"
                 :element="elementName"
                 :type="defaultLabel.type"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <FoFilledFocused v-if="defaultLabel && defaultLabel.type === 'filled'"
                         :element-name="elementName"
                         :label-type="defaultLabel.type"
        />

        <!--        todo: maybe this can be unified with the FoInputText -->
        <div v-if="helperText?.bottom && (helperText.bottom.left || helperText.bottom.right)"
             class="label"
        >
            <FoAlternativeLabel v-if="helperText.bottom.left">
                {{ helperText.bottom.left }}
            </FoAlternativeLabel>

            <FoAlternativeLabel v-if="helperText.bottom.right">
                {{ helperText.bottom.right }}
            </FoAlternativeLabel>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InputHelperText, InputLabel, LabelType }       from '@/Components/Label';
import type { ElementName, IsDisabled, IsReadonly, IsValid } from '@/Shared/Types';
import { FoFilledFocused }                                   from '@/Components/Focus/Internal';
import { FoAlternativeLabel, FoLabel, useLabelType }         from '@/Components/Label/Internal';
import { useValidity }                                       from '@/Shared/Internal';
import { computed, useId }                                   from 'vue';

type TextareaLabelType = Exclude<LabelType, 'inline'>;
type TextareaLabel = InputLabel<TextareaLabelType>;

interface Props extends IsDisabled, IsReadonly, IsValid {
    label?:       TextareaLabel;
    placeholder?: string;
    helperText?:  InputHelperText;
}

const props = withDefaults(defineProps<Props>(), {
    isDisabled: false,
    isReadonly: false,
    isValid:    undefined,
});

const id                       = useId();
const elementName: ElementName = 'textarea';

const input = defineModel<string>({ required: true });

const defaultLabel = computed((): Required<TextareaLabel> | undefined => {
    if (props.label === undefined) {
        return undefined;
    }

    return {
        text:     props.label.text,
        type:     props.label.type === undefined ? 'text' : props.label.type,
        isHidden: props.label.isHidden ?? false,
    };
});

const [
    labelTypeClass,
    validityClass,
] = [
    useLabelType(elementName, () => defaultLabel.value?.type ?? 'text'),
    useValidity(() => props.isValid),
];
</script>
