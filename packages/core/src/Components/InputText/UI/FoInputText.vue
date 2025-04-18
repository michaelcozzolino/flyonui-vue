<template>
    <div :class="[
        $attrs?.class,
        inputGroupContainerClass,
        isGroup === false && floatingClass,
    ]"
    >
        <slot v-if="$slots.prepend !== undefined || icon?.left"
              name="prepend"
        >
            <FoIcon v-if="icon?.left"
                    class="text-base-content/80 my-auto shrink-0"
                    :icon="icon.left"
                    size="extraLarge"
            />
        </slot>

        <component :is="hasInputContainer ? 'div' : FoFragment"
                   class="grow"
                   :class="floatingClass"
        >
            <FoLabel v-if="defaultLabel && (['text', 'inline'] as LabelType[]).includes(defaultLabel.type)"
                     :for="id"
                     :element="elementName"
                     :type="defaultLabel.type"
                     :is-hidden="defaultLabel.isHidden"
                     :class="($slots.prepend || icon?.left) ? 'px-3' : defaultLabel.type === 'inline' && 'me-3'"
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
                     :element="elementName"
                     :type="defaultLabel.type"
                     :is-hidden="defaultLabel.isHidden"
                     :class="defaultLabel.type === 'floating' && icon?.left === undefined && slots.append === undefined && (icon?.right || slots.prepend !== undefined) && 'ms-0'"
            >
                {{ defaultLabel.text }}
            </FoLabel>
        </component>

        <slot v-if="$slots.append !== undefined || icon?.right"
              name="append"
        >
            <FoIcon v-if="icon?.right"
                    class="text-base-content/80 my-auto ms-3 shrink-0"
                    :icon="icon.right"
                    size="extraLarge"
            />
        </slot>

        <FoHelperText v-if="helperText !== undefined"
                      :position="helperText.position"
        >
            {{ helperText.text }}
        </FoHelperText>
    </div>
</template>

<script setup lang="ts">
import type { InputTextProps }                                      from '@/Components/InputText';
import type { InputLabel, LabelType }                               from '@/Components/Label';
import type { ElementName }                                         from '@/Shared/Types';
import type { VNode }                                               from 'vue';
import { FoFragment }                                               from '@/Components/Fragment/Internal';
import { FoHelperText }                                             from '@/Components/HelperText/Internal';
import { FoIcon }                                                   from '@/Components/Icon';
import { isInJoinInjectionKey }                                     from '@/Components/Join/Internal';
import { FoLabel }                                                  from '@/Components/Label/Internal';
import { useFloating, useJoinItem, useShape, useSize, useValidity } from '@/Shared/Internal/Lib';
import { computed, inject, onMounted, useId   }                     from 'vue';

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
const isInJoin: boolean        = inject(isInJoinInjectionKey, false);

const input = defineModel<string>({ required: true });
const options = inject('flyonui-vue');

onMounted(() => {
    // console.log(options);
});

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
    return props.icon?.left !== undefined || props.icon?.right !== undefined;
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
        const leftIcon    = props.icon?.left;
        const rightIcon   = props.icon?.right;
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
    useFloating(elementName, () => defaultLabel.value?.type),
    useShape(elementName, () => props.shape),
    useSize(elementName, () => props.size),
    useValidity(() => props.isValid),
];
</script>
