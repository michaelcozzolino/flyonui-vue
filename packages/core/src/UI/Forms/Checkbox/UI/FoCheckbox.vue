<template>
    <div :class="[
             switchHasIcon === false && helperText === undefined && 'items-center',
             gapClass,
         ]"
         class="flex"
         :style="$attrs.style as StyleValue"
    >
        <Teleport defer
                  :to="`#${labelId}`"
                  :disabled="!switchHasIcon"
        >
            <input :id="id"
                   v-model="isChecked"
                   type="checkbox"
                   :class="[
                       isSwitch ? 'switch' : 'checkbox',
                       colorClass,
                       sizeClass,
                       validityClass,
                       switchHasIcon === false && helperText && 'mt-2',
                   ]"
                   :aria-label="label ?? (disabled ? 'disabled checkbox' : 'checkbox')"
                   :disabled="disabled"
                   :indeterminate.prop="indeterminate"
                   v-bind="reactiveOmit($attrs, 'style')"
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
import type { ConfigurableComponentName }                            from '@/Lib';
import type { CheckboxProps }                                        from '@/UI/Forms/Checkbox/Types/Checkbox.ts';
import type { StyleValue, VNode }                                    from 'vue';
import { useFlyonUIVueAppConfig }                                    from '@/Lib';
import { useColor }                                                  from '@/Lib/UseColor/Internal';
import { useElementId }                                              from '@/Lib/UseIdentifiable/Internal';
import { useSize }                                                   from '@/Lib/UseSize/Internal/Lib';
import { useValidity }                                               from '@/Lib/UseValidity/Internal';
import { FoLabel }                                                   from '@/UI/Components/Label/Internal';
import { isCheckableInGroupInjectionKey, switchOptionsInjectionKey } from '@/UI/Forms/Checkbox/Internal';
import { reactiveOmit }                                              from '@vueuse/core';
import { computed, inject, watch }                                   from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<CheckboxProps>(), {
    disabled: false,
    isValid:  undefined,
});

const slots = defineSlots<{
    /**
     * @internal
     * Default component's slot, to be used only for the icon of a switch. This is only for internal usage and must never
     * be used externally. Check the switch docs instead.
     * todo: must be removed from api
     */
    default?: () => VNode[];
}>();

/** If true, the checkbox is checked, otherwise it is not */
const isChecked = defineModel<boolean>({ required: true });

/**
 * If true, the checkbox is indeterminate and not checked,
 * otherwise it is not indeterminate and could either be checked or not depending on the user interaction
 */
const indeterminate = defineModel<boolean>('indeterminate');

const id         = useElementId(() => props.id);
const labelId    = computed((): string => `label-${id.value}`);
const { config } = useFlyonUIVueAppConfig();

const isCheckableInGroup = inject(isCheckableInGroupInjectionKey, false);
const switchOptions      = inject(switchOptionsInjectionKey, computed((): undefined => undefined));

const isSwitch = computed((): boolean => switchOptions.value !== undefined);

const componentName = computed(
    (): Extract<ConfigurableComponentName, 'FoSwitch' | 'FoCheckbox'> => isSwitch.value ? 'FoSwitch' : 'FoCheckbox',
);

const switchHasIcon = computed((): boolean => isSwitch.value && slots.default !== undefined);

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
    if (isCheckableInGroup || props.helperText !== undefined) {
        return 'gap-2';
    }

    return 'gap-1';
});

watch(indeterminate, (newValue: boolean | undefined) => {
    if (newValue) {
        isChecked.value = false;
    }
}, { immediate: true });

watch(
    isChecked,
    () => indeterminate.value = false,
    { once: true },
);
</script>
