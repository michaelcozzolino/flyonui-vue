<template>
    <div :class="floatingLabelClass"
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

        <input :id="id"
               type="file"
               class="input"
               :class="[sizeClass, validityClass]"
               :disabled="disabled"
               multiple
               v-bind="reactiveOmit($attrs, 'style')"
               @change="change"
        >

        <FoLabel v-if="defaultLabel?.type === 'floating'"
                 :for="id"
                 :component-name="componentName"
                 type="floating"
                 :is-hidden="defaultLabel.isHidden"
        >
            {{ defaultLabel.text }}
        </FoLabel>

        <FoHelperText v-if="inputFileHelperText !== undefined"
                      :position="inputFileHelperText.position"
        >
            {{ inputFileHelperText.text }}
        </FoHelperText>
    </div>
</template>

<script setup lang="ts">
import type { ComponentName }                      from '@/Lib';
import type { InputFileProps }                     from '@/UI/Forms/InputFile';
import type { StyleValue }                         from 'vue';
import { useFlyonUIVueAppConfig }                  from '@/Lib';
import { useFloatingLabel }                        from '@/Lib/UseFloatingLabel/Internal';
import { useElementId }                            from '@/Lib/UseIdentifiable/Internal';
import { useSize }                                 from '@/Lib/UseSize/Internal';
import { useValidity }                             from '@/Lib/UseValidity/Internal';
import { FoHelperText, usePositionableHelperText } from '@/UI/Components/HelperText/Internal';
import { FoLabel, useLabel }                       from '@/UI/Components/Label/Internal';
import { reactiveOmit }                            from '@vueuse/core';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<InputFileProps>(), {
    isValid: undefined,
});

const emit = defineEmits<{
    (e: 'upload:files', files: FileList): void;
}>();

const componentName: ComponentName = 'FoInputFile';
const { config }                   = useFlyonUIVueAppConfig();

const id = useElementId(() => props.id);

const defaultLabel = useLabel(
    config,
    componentName,
    () => props.label,
);

const inputFileHelperText = usePositionableHelperText(
    config,
    componentName,
    () => props.helperText,
);

const [
    floatingLabelClass,
    sizeClass,
    validityClass,
] = [
    useFloatingLabel(componentName, () => defaultLabel.value?.type),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];

function change(event: Event): void {
    const target = event.target;

    if (target instanceof HTMLInputElement === false || target.files === null) {
        throw new TypeError('The event does not come from an input element.');
    }

    emit('upload:files', target.files);
}
</script>
