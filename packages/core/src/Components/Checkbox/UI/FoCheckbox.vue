<template>
    <div :class="[
             helperText === undefined && 'items-center',
             gapClass,
         ]"
         class="flex"
    >
        <input :id="id"
               v-model="checked"
               type="checkbox"
               class="checkbox"
               :class="[
                   colorClass,
                   sizeClass,
                   validityClass,
                   helperText && 'mt-2',
                   $attrs.class,
               ]"
               :aria-label="label ?? (isDisabled ? 'disabled checkbox' : 'checkbox')"
               :disabled="isDisabled"
               :indeterminate.prop="isIndeterminate"
        >

        <FoLabel v-if="label !== undefined"
                 :for="id"
                 class="cursor-pointer flex flex-col"
                 :class="helperText === undefined && 'text-base'"
        >
            <template v-if="helperText !== undefined">
                <span class="text-base">
                    {{ label }}
                </span>

                <span>
                    {{ helperText }}
                </span>
            </template>

            <template v-else>
                {{ label }}
            </template>
        </FoLabel>
    </div>
</template>

<script lang="ts" setup>
import type { CheckboxProps }             from '@/Components/Checkbox/Types/Checkbox';
import type { ComponentName }             from '@/Shared';
import { isInCheckboxGroupInjectionKey }  from '@/Components/Checkbox/Internal';
import { FoLabel }                        from '@/Components/Label/Internal';
import { useColor }                       from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }         from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                        from '@/Shared/UseSize/Internal/Lib';
import { useValidity }                    from '@/Shared/UseValidity/Internal';
import { computed, inject, useId, watch } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<CheckboxProps>(), {
    isDisabled: false,
    isValid:    undefined,
});

const componentName: ComponentName = 'FoCheckbox';
const id                           = useId();
const { config }                   = useFlyonUIVueAppConfig();

const isInCheckboxGroup            = inject(isInCheckboxGroupInjectionKey, false);

const checked         = defineModel({ required: true, type: Boolean });
const isIndeterminate = defineModel('isIndeterminate', { type: Boolean });

const [
    colorClass,
    sizeClass,
    validityClass,
] = [
    useColor(config, componentName, () => props.color),
    useSize(config, componentName, () => props.size),
    useValidity(() => props.isValid),
];

const gapClass = computed(() => {
    if (isInCheckboxGroup || props.helperText !== undefined) {
        return 'gap-2';
    }

    return 'gap-1';
});

watch(isIndeterminate, (newValue: boolean | undefined) => {
    if (newValue) {
        checked.value = false;
    }
}, { immediate: true });
</script>
