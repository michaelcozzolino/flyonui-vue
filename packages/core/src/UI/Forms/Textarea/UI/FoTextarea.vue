<template>
    <div :class="[hasIcon ? 'textarea' : defaultLabel?.type === 'floating' && 'textarea-floating']"
         :style="$attrs.style as StyleValue"
    >
        <FoLabel v-if="defaultLabel?.type === 'text'"
                 :for="id"
                 :component-name="componentName"
                 type="text"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <FoIcon v-if="textareaIcon?.left"
                :class="iconClass"
                :icon="textareaIcon.left"
                :size="iconSize"
        />

        <component :is="wrapperTag"
                   :class="wrapperTag === 'div' && [floatingClass, hasIcon && 'grow']"
        >
            <textarea :id="id"
                      v-model="input"
                      :placeholder="placeholder"
                      :class="[
                          hasIcon ? 'grow' : 'textarea',
                          textareaIcon?.right && 'resize-none',
                          sizeClass,
                          validityClass,
                          $attrs.class,
                      ]"
                      :disabled="disabled"
                      :readonly="readonly"
                      v-bind="useNativeAttributes($attrs).value"
                      v-on="useListeners($attrs).value"
            />

            <FoLabel v-if="defaultLabel?.type === 'floating'"
                     :for="id"
                     :component-name="componentName"
                     type="floating"
                     :is-hidden="defaultLabel.isHidden"
            >
                {{ defaultLabel.text }}
            </FoLabel>
        </component>

        <FoIcon v-if="textareaIcon?.right"
                :class="iconClass"
                :icon="textareaIcon.right"
                :size="iconSize"
        />

        <FoHelperText v-if="textareaHelperText !== undefined"
                      :position="textareaHelperText.position"
        >
            {{ textareaHelperText.text }}
        </FoHelperText>
    </div>
</template>

<script setup lang="ts">
import type { ComponentName, IconSize  }           from '@/Lib';
import type { TextareaLabelType, TextareaProps }   from '@/UI/Forms/Textarea';
import type { StyleValue }                         from 'vue';
import { useFlyonUIVueAppConfig }                  from '@/Lib';
import { useFloatingLabel }                        from '@/Lib/UseFloatingLabel/Internal';
import { useListeners }                            from '@/Lib/UseListeners/Internal/Lib';
import { useNativeAttributes }                     from '@/Lib/UseNativeAttributes/Internal/Lib';
import { useSize }                                 from '@/Lib/UseSize/Internal';
import { useValidity }                             from '@/Lib/UseValidity/Internal';
import { FoFragment }                              from '@/UI/Components/Fragment/Internal';
import { FoHelperText, usePositionableHelperText } from '@/UI/Components/HelperText/Internal';
import { FoLabel, useLabel }                       from '@/UI/Components/Label/Internal';
import { FoIcon }                                  from '@/UI/Customization/Icon';
import { usePositionableIcon }                     from '@/UI/Customization/Icon/Internal';
import { computed,  useId }                        from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
    disabled: false,
    readonly: false,
    isValid:  undefined,
});

const id                           = useId();
const componentName: ComponentName = 'FoTextarea';

const { config } = useFlyonUIVueAppConfig();

/** The input text to be modified */
const input = defineModel<string>({ required: true });

const iconSize: IconSize = 'small';

const textareaIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

const textareaHelperText = usePositionableHelperText(
    config,
    componentName,
    () => props.helperText,
);

const defaultLabel = useLabel<TextareaLabelType>(
    config,
    componentName,
    () => props.label,
);

const iconClass = computed(() => 'text-base-content/80 mt-2 mx-4 shrink-0');

const hasIcon = computed((): boolean => {
    return textareaIcon.value?.left !== undefined || textareaIcon.value?.right !== undefined;
});

const wrapperTag = computed((): 'div' | typeof FoFragment => {
    return hasIcon.value && defaultLabel.value?.type === 'floating' ? 'div' : FoFragment;
});

const [
    floatingClass,
    sizeClass,
    validityClass,
] = [
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];
</script>
