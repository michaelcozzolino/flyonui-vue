<template>
    <div :class="hasIcon ? 'textarea' : defaultLabel?.type === 'floating' && 'textarea-floating'">
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

        <component :is="hasIcon && defaultLabel?.type === 'floating' ? 'div' : FoFragment"
                   :class="[floatingClass, hasIcon && 'grow']"
        >
            <textarea :id="id"
                      v-model="input"
                      v-bind="$attrs"
                      :placeholder="placeholder"
                      :class="[
                          hasIcon ? 'grow' : 'textarea',
                          textareaIcon?.right && 'resize-none',
                          sizeClass,
                          validityClass,
                      ]"
                      :disabled="isDisabled"
                      :readonly="isReadonly"
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
import type { TextareaLabelType, TextareaProps }   from '@/Components/Textarea';
import type { ComponentName, IconSize  }           from '@/Shared';
import { FoFragment }                              from '@/Components/Fragment/Internal';
import { FoHelperText, usePositionableHelperText } from '@/Components/HelperText/Internal';
import { FoIcon }                                  from '@/Components/Icon';
import { usePositionableIcon }                     from '@/Components/Icon/Internal';
import { FoLabel, useLabel }                       from '@/Components/Label/Internal';
import { useFloatingLabel }                        from '@/Shared/UseFloatingLabel/Internal';
import { useFlyonUIVueAppConfig }                  from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                                 from '@/Shared/UseSize/Internal';
import { useValidity }                             from '@/Shared/UseValidity/Internal';
import { computed, useId }                         from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
    isDisabled: false,
    readonly:   false,
    isValid:    undefined,
});

const id                           = useId();
const componentName: ComponentName = 'FoTextarea';

const { config } = useFlyonUIVueAppConfig();

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

const [
    floatingClass,
    sizeClass,
    validityClass,
] = [
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];

const iconClass = computed(() => 'text-base-content/80 mt-2 mx-4 shrink-0');

const hasIcon = computed((): boolean => {
    return textareaIcon.value?.left !== undefined || textareaIcon.value?.right !== undefined;
});
</script>
