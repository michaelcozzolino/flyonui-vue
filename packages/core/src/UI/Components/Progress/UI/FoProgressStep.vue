<template>
    <div :class="rootClass">
        <template v-if="typeof value === 'number' && orientation === 'horizontal'">
            <FoProgressStepBar v-for="step in steps"
                               :key="step"
                               class="min-w-0 flex-1"
                               :color="color"
                               :is-complete="isComplete(step)"
                               :value="numericValue"
            />
        </template>

        <div v-else-if="label.isVerticalFloating"
             class="flex min-h-0 flex-1 gap-1"
        >
            <div v-if="label.floatingSide === 'left'"
                 class="relative w-10"
            >
                <FoProgressPercentage is-floating
                                      orientation="vertical"
                                      :value="percentageValue"
                />
            </div>

            <div class="flex w-2 shrink-0 gap-y-1"
                 :class="orientationClass"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-h-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>

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

            <div class="flex gap-x-1"
                 :class="orientationClass"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-w-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>
        </template>

        <div v-else-if="orientation === 'vertical' && (label.hasTitle || label.position === 'top' || label.position === 'bottom')"
             class="flex min-h-0 flex-1 flex-col items-center gap-1"
        >
            <FoProgressPercentage v-if="label.position === 'top'"
                                  class="shrink-0"
                                  orientation="vertical"
                                  :value="percentageValue"
            />

            <FoProgressTitle v-if="label.position === 'bottom' && label.hasTitle"
                             :title="label.title"
            />

            <div class="flex min-h-0 flex-1 gap-y-1"
                 :class="[orientationClass, label.hasTitle ? 'w-full min-w-2' : 'w-2']"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-h-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>

            <FoProgressTitle v-if="label.position === 'top' && label.hasTitle"
                             :title="label.title"
            />

            <FoProgressPercentage v-if="label.position === 'bottom'"
                                  class="shrink-0"
                                  orientation="vertical"
                                  :value="percentageValue"
            />
        </div>

        <template v-else-if="label.hasTitle">
            <div class="mb-1 flex items-end justify-between">
                <template v-if="label.position === 'left' || label.position === 'top'">
                    <FoProgressTitle :title="label.title" />

                    <FoProgressPercentage :value="percentageValue" />
                </template>

                <template v-else>
                    <FoProgressPercentage :value="percentageValue" />

                    <FoProgressTitle :title="label.title" />
                </template>
            </div>

            <div class="flex gap-x-1"
                 :class="orientationClass"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-w-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>
        </template>

        <div v-else
             class="flex w-full items-center gap-2"
             :class="[
                 orientation === 'vertical' && 'min-h-0 flex-1 flex-col',
                 orientation === 'horizontal' && (label.position === 'top' || label.position === 'bottom') && 'flex-col',
             ]"
        >
            <FoProgressPercentage v-if="label.position === 'left' || label.position === 'top'"
                                  :orientation="orientation"
                                  :value="percentageValue"
            />

            <div class="relative flex gap-1"
                 :class="[
                     orientationClass,
                     orientation === 'vertical'
                         ? 'min-h-0 w-full flex-1'
                         : 'w-full min-w-0 flex-1',
                     orientation === 'vertical' && (label.position === 'within' ? 'min-w-6' : 'min-w-2'),
                 ]"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   :class="[
                                       orientation === 'vertical' ? 'min-h-0 flex-1' : 'min-w-0 flex-1',
                                       label.position === 'within' && orientation === 'horizontal' && 'min-h-6',
                                   ]"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />

                <span v-if="label.position === 'within'"
                      class="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                    <span class="bg-base-100 text-base-content rounded-sm px-1 text-xs"
                          :class="orientation === 'vertical' && '-rotate-90'"
                    >
                        {{ percentageValue }}
                    </span>
                </span>
            </div>

            <FoProgressPercentage v-if="label.position === 'right' || label.position === 'bottom'"
                                  :orientation="orientation"
                                  :value="percentageValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Orientation }                                         from '@/Lib';
import type { ProgressStepProps, ProgressValue }                    from '@/UI/Components/Progress/Types';
import { computed }                                                 from 'vue';
import { useOrientation }                                           from '@/Lib/UseOrientation/Internal';
import { FoProgressPercentage, FoProgressStepBar, FoProgressTitle } from '@/UI/Components/Progress/Internal';
import { useProgressLabel }                                         from '@/UI/Components/Progress/Internal/Lib';

interface Props extends ProgressStepProps {
    orientation?: Orientation;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
});

const orientationClass = useOrientation('FoProgressStep', (): Orientation => props.orientation);

const { numericValue, percentageValue, label } = useProgressLabel(
    (): number | ProgressValue => props.value,
    (): Orientation => props.orientation,
);

const rootClass = computed((): string => {
    if (label.value.isVerticalFloating || (label.value.hasTitle && props.orientation === 'vertical')) {
        return 'flex flex-col';
    }

    if (label.value.hasTitle || label.value.isFloating) {
        return 'flex flex-col gap-1';
    }

    if (props.orientation === 'vertical') {
        return 'flex flex-col items-center justify-between gap-1';
    }

    if (label.value.position === 'top' || label.value.position === 'bottom') {
        return 'flex flex-col gap-1';
    }

    return label.value.position === undefined
        ? `flex gap-x-1 ${orientationClass.value}`
        : 'block';
});

function isComplete(step: number): boolean {
    return (step * 100 / props.steps) <= numericValue.value;
}
</script>
