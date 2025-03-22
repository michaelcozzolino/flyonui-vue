<template>
    <component :is="hasFilledInputContainer ? 'div' : FoFragment">
        <div :class="[
            defaultLabel && defaultLabel.type !== 'text' && 'relative',
            !hasFilledInputContainer && $attrs?.class,
            inputGroupContainerClass,
        ]"
        >
            <FoInputGroupText v-if="$slots.prepend !== undefined || icon?.left">
                <slot name="prepend">
                    <FoIcon v-if="icon?.left"
                            :icon="icon.left"
                            size="extraLarge"
                    />
                </slot>
            </FoInputGroupText>

            <span v-if="showTopHelperText(helperText?.top)"
                  class="label justify-end"
            >
                <FoAlternativeLabel>
                    {{ helperText.top }}
                </FoAlternativeLabel>
            </span>

            <component :is="showTopHelperText(helperText?.top) || growInput ? 'div' : FoFragment"
                       class="relative"
                       :class="growInput && 'grow'"
            >
                <FoLabel v-if="defaultLabel && (['text', 'inline'] as LabelType[]).includes(defaultLabel.type)"
                         :for="id"
                         :element="defaultLabel.type === 'text' ? 'label' : elementName"
                         :type="defaultLabel.type"
                         :is-hidden="defaultLabel.isHidden"
                >
                    {{ defaultLabel.text }}
                </FoLabel>

                <input :id="id"
                       v-model="input"
                       :type="type"
                       class="input"
                       :class="[
                           inputLabelTypeClass,
                           shapeClass,
                           sizeClass,
                           validityClass,
                           withoutFocus && 'no-focus border-0',
                       ]"
                       :placeholder="placeholder"
                       :disabled="isDisabled"
                       :readonly="isReadonly"
                >

                <FoLabel v-if="defaultLabel && (defaultLabel.type !== 'text' && defaultLabel.type !== 'inline')"
                         :for="id"
                         :element="elementName"
                         :type="defaultLabel.type"
                         :is-hidden="defaultLabel.isHidden"
                >
                    {{ defaultLabel.text }}
                </FoLabel>

                <FoFilledFocused v-if="shape !== 'pilled' && hasFilledInputContainer === false"
                                 :element-name="elementName"
                                 :label-type="defaultLabel?.type"
                />
            </component>

            <FoInputGroupText v-if="$slots.append !== undefined || icon?.right">
                <slot name="append">
                    <FoIcon v-if="icon?.right"
                            :icon="icon.right"
                            size="extraLarge"
                    />
                </slot>
            </FoInputGroupText>

            <span v-if="helperText?.bottom && (helperText.bottom.left || helperText.bottom.right)"
                  class="label"
            >
                <FoAlternativeLabel v-if="helperText.bottom.left">
                    {{ helperText.bottom.left }}
                </FoAlternativeLabel>

                <FoAlternativeLabel v-if="helperText.bottom.right">
                    {{ helperText.bottom.right }}
                </FoAlternativeLabel>
            </span>
        </div>

        <FoFilledFocused v-if="shape !== 'pilled' && hasFilledInputContainer"
                         :element-name="elementName"
                         :label-type="defaultLabel?.type"
        />
    </component>
</template>

<script setup lang="ts">
import type { InputTextLabelProp, InputTextProps }   from '@/Components/InputText';
import type { LabelType }                            from '@/Components/Label';
import type { ElementName }                          from '@/Shared/Types';
import type { VNode }                                from 'vue';
import { FoFilledFocused }                           from '@/Components/Focus/Internal';
import { FoFragment }                                from '@/Components/Fragment/Internal';
import { FoIcon }                                    from '@/Components/Icon';
import { FoInputGroupText }                          from '@/Components/InputText/Internal';
import { FoAlternativeLabel, FoLabel, useLabelType } from '@/Components/Label/Internal';
import { useShape, useSize, useValidity }            from '@/Shared/Internal/Lib';
import { computed, useId }                           from 'vue';

const props = withDefaults(defineProps<InputTextProps>(), {
    type:         'text',
    shape:        'default',
    size:         'default',
    isDisabled:   false,
    isReadonly:   false,
    isValid:      undefined,
    withoutFocus: false,
});

const slots = defineSlots<{
    default?: () => VNode[];
    prepend?: () => VNode[];
    append?:  () => VNode[];
}>();

const id                       = useId();
const elementName: ElementName = 'input-text';

const input = defineModel<string>({ required: true });

const defaultLabel = computed((): Required<InputTextLabelProp> | undefined => {
    if (props.label === undefined) {
        return undefined;
    }

    return {
        text:     props.label.text,
        type:     props.label.type === undefined ? 'text' : props.label.type,
        isHidden: props.label.isHidden ?? false,
    };
});

const hasIcon = computed(() => {
    return props.icon?.left !== undefined || props.icon?.right !== undefined;
});

const isGroup = computed(() => {
    return hasIcon.value || slots.append !== undefined || slots.prepend !== undefined;
});

const hasFilledInputContainer = computed(() => {
    return isGroup.value && defaultLabel.value?.type === 'filled';
});

const inputGroupContainerClass = computed(() => {
    const inputGroupClass = defaultLabel.value?.type === 'filled' ? 'input-group-filled' : 'input-group';

    return (isGroup.value || defaultLabel.value?.type === 'inline') && inputGroupClass;
});

const growInput = computed(() => {
    return isGroup.value && defaultLabel.value?.type !== 'text' && defaultLabel.value?.type !== 'inline';
});

const [
    inputLabelTypeClass,
    shapeClass,
    sizeClass,
    validityClass,
] = [
    useLabelType(elementName, () => defaultLabel.value?.type ?? 'text'),
    useShape(elementName, () => props.shape),
    useSize(elementName, () => props.size),
    useValidity(() => props.isValid),
];

function showTopHelperText(text?: string): text is string {
    if (defaultLabel.value === undefined) {
        return false;
    }
    // todo: some type restrictions
    return defaultLabel.value.type !== 'text' && text !== undefined;
}
</script>
