<template>
    <component :is="isInJoin ? FoFragment : 'div'"
               :class="isInJoin === false && ['flex', hasLabelAndHelperText ? 'gap-3' : 'items-center gap-1']"
               v-bind="isInJoin === false && reactiveOmit($attrs, 'class')"
    >
        <input :id="id"
               v-model="checkedValue"
               :value="value"
               type="radio"
               :class="isInJoin ? [$attrs?.class, joinItemClass] : [
                   $attrs?.class,
                   'radio',
                   colorClass,
                   sizeClass,
                   validityClass,
                   joinItemClass,
                   hasLabelAndHelperText && 'mt-2',
                   isInset && 'radio-inset',
               ]"
               :disabled="disabled"
               :aria-label="isInJoin ? label : ''"
        >

        <FoLabel v-if="isInJoin === false && label !== undefined"
                 :for="id"
                 :class="hasLabelAndHelperText && 'flex flex-col'"
        >
            <span class="text-base">
                {{ label }}
            </span>

            <FoHelperText v-if="helperText !== undefined">
                {{ helperText }}
            </FoHelperText>
        </FoLabel>
    </component>
</template>

<script setup lang="ts">
import type { Color, ComponentName, Size }   from '@/Lib';
import type { RadioProps }                   from '@/UI/Forms/Radio';
import { reactiveOmit }                      from '@vueuse/core';
import { computed, inject }                  from 'vue';
import { useFlyonUIVueAppConfig }            from '@/Lib';
import { useClass }                          from '@/Lib/UseClass/Internal';
import { useColor }                          from '@/Lib/UseColor/Internal';
import { useElementId }                      from '@/Lib/UseIdentifiable/Internal';
import { useSize }                           from '@/Lib/UseSize/Internal';
import { useValidity }                       from '@/Lib/UseValidity/Internal';
import { FoFragment }                        from '@/UI/Components/Fragment/Internal';
import { FoHelperText }                      from '@/UI/Components/HelperText/Internal';
import { FoLabel }                           from '@/UI/Components/Label/Internal';
import { isInJoinInjectionKey, useJoinItem } from '@/UI/Forms/Join/Internal';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<RadioProps>(), {
    isValid: undefined,
});

/** The value of the checked radio */
const checkedValue = defineModel<string>({ required: true });

const componentName: ComponentName = 'FoRadio';
const { config }                   = useFlyonUIVueAppConfig();

const isInJoin: boolean = inject(isInJoinInjectionKey, false);

const id = useElementId((): string | undefined => props.id);

const [
    colorClass,
    sizeClass,
    validityClass,
    joinItemClass,
] = [
    useColor(config, componentName, (): Color | undefined => props.color),
    useSize(config, componentName, (): Size | undefined => props.size),
    useValidity((): boolean | undefined => props.isValid),
    useClass(isInJoin, (): string => `btn btn-soft ${useJoinItem(isInJoin).value}`),
];

const hasLabelAndHelperText = computed((): boolean => props.label !== undefined && props.helperText !== undefined);
</script>
