<template>
    <component :is="label.hasTitle || label.isFloating ? 'div' : FoFragment"
               :class="label.isFloating && orientation !== 'vertical' && 'flex flex-col gap-1'"
    >
        <div v-if="label.isVerticalFloating"
             class="flex h-full gap-1"
        >
            <div v-if="label.floatingSide === 'left'"
                 class="relative w-10"
            >
                <FoProgressPercentage is-floating
                                      orientation="vertical"
                                      :value="percentageValue"
                />
            </div>

            <FoProgressBody class="h-full w-2"
                            v-bind="{ ...$props, numericValue, percentageValue }"
            />

            <div v-if="label.floatingSide === 'right'"
                 class="relative w-10"
            >
                <FoProgressPercentage is-floating
                                      orientation="vertical"
                                      :value="percentageValue"
                />
            </div>
        </div>

        <template v-else-if="label.isFloating">
            <FoProgressPercentage is-floating
                                  :value="percentageValue"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />
        </template>

        <div v-if="label.hasTitle && orientation === 'vertical'"
             class="flex h-full flex-col items-center justify-between gap-1"
        >
            <FoProgressPercentage v-if="label.position === 'top'"
                                  :value="percentageValue"
            />

            <FoProgressTitle v-if="label.position === 'bottom'"
                             :title="label.title"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />

            <FoProgressTitle v-if="label.position === 'top'"
                             :title="label.title"
            />

            <FoProgressPercentage v-if="label.position === 'bottom'"
                                  :value="percentageValue"
            />
        </div>

        <div v-else-if="label.hasTitle"
             class="flex items-end justify-between mb-1"
        >
            <template v-if="(label.position === 'left' || label.position === 'right') && label.hasTitle">
                <template v-if="label.position === 'left'">
                    <FoProgressTitle :title="label.title" />

                    <FoProgressPercentage :value="percentageValue" />
                </template>

                <template v-else>
                    <FoProgressPercentage :value="percentageValue" />

                    <FoProgressTitle :title="label.title" />
                </template>
            </template>
        </div>

        <FoProgressBody v-if="label.hasTitle && orientation !== 'vertical'"
                        v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }"
        />

        <div v-else-if="label.hasTitle === false && label.isFloating === false"
             class="flex items-center gap-2"
             :class="orientation === 'vertical' && 'flex-col'"
             v-bind="{ ...$attrs }"
        >
            <FoProgressPercentage v-if="(label.position === 'left' || label.position === 'top') && label.hasTitle === false"
                                  :value="percentageValue"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />

            <FoProgressPercentage v-if="(label.position === 'right' || label.position === 'bottom') && label.hasTitle === false"
                                  :value="percentageValue"
            />
        </div>
    </component>
</template>

<script setup lang="ts">
import type { Orientation }                                      from '@/Lib';
import type { ProgressProps, ProgressValue }                     from '@/UI/Components/Progress/Types';
import { FoFragment }                                            from '@/UI/Components/Fragment/Internal';
import { FoProgressBody, FoProgressPercentage, FoProgressTitle } from '@/UI/Components/Progress/Internal';
import { useProgressLabel }                                      from '@/UI/Components/Progress/Internal/Lib';

const props = withDefaults(defineProps<ProgressProps>(), {
    orientation: 'horizontal',
});

const { numericValue, percentageValue, label } = useProgressLabel(
    (): number | ProgressValue => props.value,
    (): Orientation => props.orientation,
);
</script>
