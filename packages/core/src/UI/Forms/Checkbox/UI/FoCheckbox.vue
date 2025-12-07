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
import type { ConfigurableComponentName }                            from '@/Lib';
import type { CheckboxProps }                                        from '@/UI/Forms/Checkbox/Types/Checkbox.ts';
import type { VNode }                                                from 'vue';
import { useFlyonUIVueAppConfig }                                    from '@/Lib';
import { useColor }                                                  from '@/Lib/UseColor/Internal';
import { useElementId }                                              from '@/Lib/UseIdentifiable/Internal';
import { useSize }                                                   from '@/Lib/UseSize/Internal/Lib';
import { useValidity }                                               from '@/Lib/UseValidity/Internal';
import { FoLabel }                                                   from '@/UI/Components/Label/Internal';
import { isCheckableInGroupInjectionKey, switchOptionsInjectionKey } from '@/UI/Forms/Checkbox/Internal';
import { computed, inject, watch }                                   from 'vue';

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
     * todo: must be removed from api
     */
    default?: () => VNode[];
}>();

const checked         = defineModel<boolean>({ required: true });
const isIndeterminate = defineModel<boolean>('isIndeterminate');

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

watch(isIndeterminate, (newValue: boolean | undefined) => {
    if (newValue) {
        checked.value = false;
    }
}, { immediate: true });
</script>
