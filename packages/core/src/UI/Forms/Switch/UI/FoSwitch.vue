<template>
    <FoCheckbox v-bind="reactiveOmit(props, 'preset')"
                v-model="isChecked"
                class="peer"
                :class="presetClass"
    >
        <template v-if="hasIcon"
                  #default
        >
            <FoIcon v-if="switchIcon?.left !== undefined && isChecked"
                    class="text-primary-content start-1 peer-checked:block"
                    :class="iconClass"
                    :icon="switchIcon.left"
                    size="extraSmall"
            />

            <FoIcon v-else-if="switchIcon?.right !== undefined"
                    class="text-neutral-content end-1 block peer-checked:hidden"
                    :class="iconClass"
                    :icon="switchIcon.right"
                    size="extraSmall"
            />
        </template>
    </FoCheckbox>
</template>

<script setup lang="ts">
import type { ComponentName }                          from '@/Lib';
import type { SwitchProps }                            from '@/UI/Forms/Switch';
import {  useFlyonUIVueAppConfig }                     from '@/Lib';
import { usePreset }                                   from '@/Lib/UsePreset/Internal';
import { isLabelUsedAsSwitchIconInjectionKey }         from '@/UI/Components/Label/Internal/Lib';
import { FoIcon }                                      from '@/UI/Customization';
import { useHasPositionableIcon, usePositionableIcon } from '@/UI/Customization/Icon/Internal';
import { FoCheckbox }                                  from '@/UI/Forms';
import { isSwitchInjectionKey }                        from '@/UI/Forms/Checkbox/Internal';
import { reactiveOmit }                                from '@vueuse/core';
import { computed, provide }                           from 'vue';

const props = withDefaults(defineProps<SwitchProps>(), {
    isDisabled: false,
    isValid:    undefined,
});

provide(isSwitchInjectionKey, true);

const componentName: ComponentName = 'FoSwitch';
const { config }                   = useFlyonUIVueAppConfig();

const isChecked = defineModel<boolean>({ required: true });

const switchIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

const hasIcon = computed((): boolean => useHasPositionableIcon(switchIcon));

provide(isLabelUsedAsSwitchIconInjectionKey, hasIcon);

const presetClass = usePreset(config, componentName, () => props.preset);

const iconClass = computed((): string => 'absolute top-1.5 z-1');
</script>
