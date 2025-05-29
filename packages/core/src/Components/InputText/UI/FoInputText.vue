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
                    size="extraLarge"
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
                    size="extraLarge"
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
import type { InputTextProps }        from '@/Components/InputText';
import type { InputLabel, LabelType } from '@/Components/Label';

import type { ComponentName }                      from '@/Shared/Utils/Internal';
import type { VNode }                              from 'vue';
import { FoFragment }                              from '@/Components/Fragment/Internal';
import { FoHelperText, usePositionableHelperText } from '@/Components/HelperText/Internal';
import { FoIcon }                                  from '@/Components/Icon';
import { usePositionableIcon }                     from '@/Components/Icon/Internal';
import { isInJoinInjectionKey, useJoinItem }       from '@/Components/Join/Internal';

import { FoLabel }          from '@/Components/Label/Internal';
import { useFloatingLabel } from '@/Shared/UseFloatingLabel/Internal';

import { useFlyonUIVueAppConfig }  from '@/Shared/UseFlyonUIVueAppConfig';
import { useShape }                from '@/Shared/UseShape/Internal';
import { useSize }                 from '@/Shared/UseSize/Internal';
import { useValidity }             from '@/Shared/UseValidity/Internal';
import { computed, inject, useId } from 'vue';

const props = withDefaults(defineProps<InputTextProps>(), {
    type:         'text',
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

const id                           = useId();
const componentName: ComponentName = 'FoInputText';

const { config }        = useFlyonUIVueAppConfig();
const isInJoin: boolean = inject(isInJoinInjectionKey, false);

const input = defineModel<string>({ required: true });

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

const defaultLabel = computed((): Required<InputLabel> | undefined => {
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
