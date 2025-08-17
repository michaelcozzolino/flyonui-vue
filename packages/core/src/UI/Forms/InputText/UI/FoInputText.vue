<template>
    <div :class="[
        $attrs?.class,
        inputGroupContainerClass,
        isGroup === false && floatingClass,
    ]"
    >
        <slot v-if="$slots.prepend !== undefined || inputIcon?.left"
              name="prepend"
        >
            <FoIcon v-if="inputIcon?.left"
                    class="text-base-content/80 my-auto shrink-0"
                    :icon="inputIcon.left"
                    :size="iconSize"
            />
        </slot>

        <component :is="hasInputContainer ? 'div' : FoFragment"
                   class="grow"
                   :class="floatingClass"
        >
            <FoLabel v-if="defaultLabel && (['text', 'inline'] as LabelType[]).includes(defaultLabel.type)"
                     :for="id"
                     :component-name="componentName"
                     :type="defaultLabel.type"
                     :is-hidden="defaultLabel.isHidden"
                     :class="($slots.prepend || inputIcon?.left) ? 'px-3' : defaultLabel.type === 'inline' && 'me-3'"
            >
                {{ defaultLabel.text }}
            </FoLabel>

            <input :id="id"
                   v-model="input"
                   :type="type"
                   :class="[
                       joinItemClass,
                       isGroup ? 'grow' : 'input',
                       isGroup && 'pb-1 placeholder:pb-1', // todo: temporary because the padding doesn't seem to be correct even with the same flyonui code
                       paddingClass,
                       shapeClass,
                       sizeClass,
                       validityClass,
                       withoutFocus && 'no-focus border-0',
                   ]"
                   :placeholder="placeholder"
                   :disabled="isDisabled"
                   :readonly="isReadonly"
                   :list="list"
            >

            <FoLabel v-if="defaultLabel && (defaultLabel.type !== 'text' && defaultLabel.type !== 'inline')"
                     :for="id"
                     :component-name="componentName"
                     :type="defaultLabel.type"
                     :is-hidden="defaultLabel.isHidden"
                     :class="defaultLabel.type === 'floating' && inputIcon?.left === undefined && slots.append === undefined && (inputIcon?.right || slots.prepend !== undefined) && 'ms-0'"
            >
                {{ defaultLabel.text }}
            </FoLabel>
        </component>

        <slot v-if="$slots.append !== undefined || inputIcon?.right"
              name="append"
        >
            <FoIcon v-if="inputIcon?.right"
                    class="text-base-content/80 my-auto ms-3 shrink-0"
                    :icon="inputIcon.right"
                    :size="iconSize"
            />
        </slot>

        <FoHelperText v-if="inputHelperText !== undefined"
                      :position="inputHelperText.position"
        >
            {{ inputHelperText.text }}
        </FoHelperText>
    </div>
</template>

<script setup lang="ts">
import type { ComponentName, IconSize }         from '@/Lib';
import type { WithAddonSlots, WithDefaultSlot } from '@/Types';

import type { LabelType }         from '@/UI/Components';
import type { InputTextProps }    from '@/UI/Forms/InputText';
import { useFlyonUIVueAppConfig } from '@/Lib';
import { useFloatingLabel }       from '@/Lib/UseFloatingLabel/Internal';
import { useShape }               from '@/Lib/UseShape/Internal';
import { useSize }                from '@/Lib/UseSize/Internal';

import { useValidity } from '@/Lib/UseValidity/Internal';

import { FoFragment }                              from '@/UI/Components/Fragment/Internal';
import { FoHelperText, usePositionableHelperText } from '@/UI/Components/HelperText/Internal';
import { FoLabel, useLabel }                       from '@/UI/Components/Label/Internal';
import { FoIcon }                                  from '@/UI/Customization/Icon';
import { usePositionableIcon }                     from '@/UI/Customization/Icon/Internal';
import { isInJoinInjectionKey, useJoinItem }       from '@/UI/Forms/Join/Internal';
import { computed, inject, useId }                 from 'vue';

const props = withDefaults(defineProps<InputTextProps>(), {
    type:         'text',
    isDisabled:   false,
    isReadonly:   false,
    isValid:      undefined,
    withoutFocus: false,
});

const slots = defineSlots<WithDefaultSlot & WithAddonSlots>();

const id                           = useId();
const componentName: ComponentName = 'FoInputText';

const { config }        = useFlyonUIVueAppConfig();
const isInJoin: boolean = inject(isInJoinInjectionKey, false);

type InputTextValue = string | (string | null);

// todo: this should be documented through the component api
const [input, modifiers] = defineModel<InputTextValue, 'trim' | 'null'>({
    required: true,
    set:      (value: InputTextValue) => {
        if (modifiers.null) {
            return value === '' ? null : value;
        }

        return value;
    },
});

const iconSize: IconSize = 'small';

const inputIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

const inputHelperText = usePositionableHelperText(
    config,
    componentName,
    () => props.helperText,
);

const defaultLabel = useLabel(
    config,
    componentName,
    () => props.label,
);

const hasIcon = computed(() => {
    return inputIcon.value?.left !== undefined || inputIcon.value?.right !== undefined;
});

const isGroup = computed(() => {
    return hasIcon.value || slots.append !== undefined || slots.prepend !== undefined || defaultLabel.value?.type === 'inline';
});

const inputGroupContainerClass = computed(() => {
    return isGroup.value && 'input';
});

const hasInputContainer = computed(() => {
    return isGroup.value && defaultLabel.value?.type === 'floating';
});

const paddingClass = computed(() => {
    if (isGroup.value && defaultLabel.value?.type !== 'inline') {
        const leftIcon    = inputIcon.value?.left;
        const rightIcon   = inputIcon.value?.right;
        const prependSlot = slots.prepend;
        const appendSlot  = slots.append;

        if ((leftIcon && rightIcon) || (prependSlot && appendSlot)) {
            return 'px-3';
        }

        if (leftIcon || prependSlot) {
            return 'ps-3';
        }

        if (rightIcon || appendSlot) {
            return 'pe-3';
        }
    }

    return '';
});

const [
    joinItemClass,
    floatingClass,
    shapeClass,
    sizeClass,
    validityClass,
] = [
    useJoinItem(isInJoin),
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useShape(config, componentName, () => props.shape),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];
</script>
