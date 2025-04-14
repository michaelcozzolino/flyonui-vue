<template>
    <div :class="hasIcon ? 'textarea' : defaultLabel?.type === 'floating' && 'textarea-floating'">
        <FoLabel v-if="defaultLabel?.type === 'text'"
                 :for="id"
                 :element="elementName"
                 type="text"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <FoIcon v-if="icon?.left"
                :class="iconClass"
                :icon="icon.left"
                size="extraLarge"
        />

        <component :is="hasIcon && defaultLabel?.type === 'floating' ? 'div' : FoFragment"
                   :class="[floatingClass, hasIcon && 'grow']"
        >
            <textarea :id="id"
                      v-model="input"
                      v-bind="$attrs"
                      :placeholder="placeholder"
                      :class="[
                          hasIcon ? 'grow' : 'textarea',
                          icon?.right && 'resize-none',
                          sizeClass,
                          validityClass,
                      ]"
                      :disabled="isDisabled"
                      :readonly="isReadonly"
            />

            <FoLabel v-if="defaultLabel?.type === 'floating'"
                     :for="id"
                     :element="elementName"
                     type="floating"
                     :is-hidden="defaultLabel.isHidden"
            >
                {{ defaultLabel.text }}
            </FoLabel>
        </component>

        <FoIcon v-if="icon?.right"
                :class="iconClass"
                :icon="icon.right"
                size="extraLarge"
        />

        <FoHelperText v-if="helperText !== undefined"
                      :position="helperText.position"
        >
            {{ helperText.text }}
        </FoHelperText>
    </div>
</template>

<script setup lang="ts">
import type { InputHelperText }                                              from '@/Components/HelperText/Internal';
import type { PositionableIcon }                                             from '@/Components/Icon';
import type { InputLabel, LabelType }                                        from '@/Components/Label';
import type { ElementName, IsDisabled, IsReadonly, IsValid, SizeWithout2XL } from '@/Shared/Types';
import { FoFragment }                                                        from '@/Components/Fragment/Internal';
import { FoHelperText }                                                      from '@/Components/HelperText/Internal';
import { FoIcon }                                                            from '@/Components/Icon';
import { FoLabel }                                                           from '@/Components/Label/Internal';
import { useFloating, useSize, useValidity }                                 from '@/Shared/Internal';
import { computed, useId }                                                   from 'vue';

type TextareaLabelType = Exclude<LabelType, 'inline'>;
type TextareaLabel = InputLabel<TextareaLabelType>;

interface Props extends IsDisabled, IsReadonly, IsValid {
    icon?:        PositionableIcon;
    label?:       TextareaLabel;
    placeholder?: string;
    helperText?:  InputHelperText;
    size?:        SizeWithout2XL;
}

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
    isDisabled: false,
    isReadonly: false,
    isValid:    undefined,
    size:       'default',
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
    floatingClass,
    sizeClass,
    validityClass,
] = [
    useFloating(elementName, () => defaultLabel.value?.type),
    useSize(elementName, () => props.size),
    useValidity(() => props.isValid),
];

const iconClass = computed(() => 'text-base-content/80 mt-2 mx-4 shrink-0');

const hasIcon = computed((): boolean => {
    return props.icon?.left !== undefined || props.icon?.right !== undefined;
});
</script>
