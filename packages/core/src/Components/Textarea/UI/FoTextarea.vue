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
                      :disabled="disabled"
                      :readonly="readonly"
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
import type { TextareaLabel, TextareaProps } from '@/Components/Textarea';
import type { ComponentName }                from '@/Shared/Utils/Internal';
import { FoFragment }                        from '@/Components/Fragment/Internal';
import { FoHelperText }                      from '@/Components/HelperText/Internal';
import { FoIcon }                            from '@/Components/Icon';
import { FoLabel }                           from '@/Components/Label/Internal';
import { useFlyonUIVueAppConfig }            from '@/Configuration/CreateFlyonUIVueApp';
import { useFloatingLabel }                  from '@/Shared/UseFloatingLabel/Internal';
import { useSize }                           from '@/Shared/UseSize/Internal';
import { useValidity }                       from '@/Shared/UseValidity/Internal';
import { computed, useId }                   from 'vue';

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

const config = useFlyonUIVueAppConfig();

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
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];

const iconClass = computed(() => 'text-base-content/80 mt-2 mx-4 shrink-0');

const hasIcon = computed((): boolean => {
    return props.icon?.left !== undefined || props.icon?.right !== undefined;
});
</script>
