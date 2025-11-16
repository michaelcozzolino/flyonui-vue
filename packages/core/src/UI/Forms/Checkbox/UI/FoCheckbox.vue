<template>
    <div :class="[
             switchHasIcon === false && helperText === undefined && 'items-center',
             gapClass,
         ]"
         class="flex"
    >
        <Teleport defer
                  :to="`#${labelId}`"
                  :disabled="!switchHasIcon"
        >
            <input :id="id"
                   v-model="checked"
                   type="checkbox"
                   :class="[
                       isSwitch ? 'switch' : 'checkbox',
                       colorClass,
                       sizeClass,
                       validityClass,
                       switchHasIcon === false && helperText && 'mt-2',
                       $attrs.class,
                   ]"
                   :aria-label="label ?? (isDisabled ? 'disabled checkbox' : 'checkbox')"
                   :disabled="isDisabled"
                   :indeterminate.prop="isIndeterminate"
            >
        </Teleport>

        <FoLabel v-if="switchHasIcon || label !== undefined"
                 :id="labelId"
                 :for="id"
                 :class="[
                     switchHasIcon ? 'relative inline-block' : 'flex flex-col',
                     helperText === undefined && 'text-base',
                 ]"
        >
            <slot v-if="switchHasIcon" />

            <template v-else-if="helperText !== undefined">
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
import type { ConfigurableComponentName }                       from '@/Lib';
import type { CheckboxProps }                                   from '@/UI/Forms/Checkbox/Types/Checkbox.ts';
import type { VNode }                                           from 'vue';
import { useFlyonUIVueAppConfig }                               from '@/Lib';
import { useColor }                                             from '@/Lib/UseColor/Internal';
import { useSize }                                              from '@/Lib/UseSize/Internal/Lib';
import { useValidity }                                          from '@/Lib/UseValidity/Internal';
import { FoLabel }                                              from '@/UI/Components/Label/Internal';
import { isCheckableInGroupInjectionKey, isSwitchInjectionKey } from '@/UI/Forms/Checkbox/Internal';
import { computed, inject, useId,  watch   }                    from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<CheckboxProps>(), {
    isDisabled: false,
    isValid:    undefined,
});

const slots = defineSlots<{
    /**
     * @internal
     * Default component's slot, to be used only for the icon of a switch. This is only for internal usage and must never
     * be used externally. Check the switch docs instead.
     */
    default?: () => VNode[];
}>();

const id                           = useId(); // todo: check
const labelId = computed((): string => `label-${id}`);
const { config }                   = useFlyonUIVueAppConfig();

const isInCheckboxGroup            = inject(isCheckableInGroupInjectionKey, false);
// todo: maybe i can try an object with is switch and label in the injection key directly
const isSwitch            = inject(isSwitchInjectionKey, false);

const checked         = defineModel({ required: true, type: Boolean });
const isIndeterminate = defineModel('isIndeterminate', { type: Boolean });

const componentName = computed(
    (): Extract<ConfigurableComponentName, 'FoSwitch' | 'FoCheckbox'> => isSwitch ? 'FoSwitch' : 'FoCheckbox',
);

// todo: maybe this can be calculated from the injection key related to the label
const switchHasIcon = computed((): boolean => isSwitch && slots.default !== undefined);

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
