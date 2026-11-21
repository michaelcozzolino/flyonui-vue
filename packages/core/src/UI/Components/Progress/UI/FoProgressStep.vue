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

        <div v-else-if="isVerticalFloating"
             class="flex min-h-0 flex-1 gap-1"
        >
            <div v-if="floatingSide === 'left'"
                 class="relative w-10"
            >
                <FoProgressPercentage is-floating
                                      orientation="vertical"
                                      :value="percentageValue"
                />
            </div>

            <div class="flex w-2 shrink-0 flex-col-reverse gap-y-1">
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-h-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>

            <div v-if="floatingSide === 'right'"
                 class="relative w-10"
            >
                <FoProgressPercentage is-floating
                                      orientation="vertical"
                                      :value="percentageValue"
                />
            </div>
        </div>

        <template v-else-if="isFloating">
            <FoProgressPercentage is-floating
                                  :value="percentageValue"
            />

            <div class="flex items-center gap-x-1">
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-w-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>
        </template>

        <div v-else-if="hasTitle && orientation === 'vertical'"
             class="flex min-h-0 flex-1 flex-col items-center gap-1"
        >
            <FoProgressPercentage v-if="labelPosition === 'top'"
                                  orientation="vertical"
                                  :value="percentageValue"
            />

            <FoProgressTitle v-if="labelPosition === 'bottom'"
                             :title="labelTitle"
            />

            <div class="flex min-h-0 w-full min-w-2 flex-1 flex-col-reverse gap-y-1">
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   class="min-h-0 flex-1"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />
            </div>

            <FoProgressTitle v-if="labelPosition === 'top'"
                             :title="labelTitle"
            />

            <FoProgressPercentage v-if="labelPosition === 'bottom'"
                                  orientation="vertical"
                                  :value="percentageValue"
            />
        </div>

        <template v-else-if="hasTitle">
            <div class="mb-1 flex items-end justify-between">
                <template v-if="labelPosition === 'left' || labelPosition === 'top'">
                    <FoProgressTitle :title="labelTitle" />

                    <FoProgressPercentage :value="percentageValue" />
                </template>

                <template v-else>
                    <FoProgressPercentage :value="percentageValue" />

                    <FoProgressTitle :title="labelTitle" />
                </template>
            </div>

            <div class="flex items-center gap-x-1">
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
                 orientation === 'horizontal' && (labelPosition === 'top' || labelPosition === 'bottom') && 'flex-col',
             ]"
        >
            <FoProgressPercentage v-if="labelPosition === 'left' || labelPosition === 'top'"
                                  :orientation="orientation"
                                  :value="percentageValue"
            />

            <div class="relative flex gap-1"
                 :class="[
                     orientation === 'vertical'
                         ? 'min-h-0 w-full flex-1 flex-col-reverse'
                         : 'w-full min-w-0 flex-1 items-center',
                     orientation === 'vertical' && (labelPosition === 'within' ? 'min-w-6' : 'min-w-2'),
                 ]"
            >
                <FoProgressStepBar v-for="step in steps"
                                   :key="step"
                                   :class="[
                                       orientation === 'vertical' ? 'min-h-0 flex-1' : 'min-w-0 flex-1',
                                       labelPosition === 'within' && orientation === 'horizontal' && 'min-h-6',
                                   ]"
                                   :color="color"
                                   :is-complete="isComplete(step)"
                                   :value="numericValue"
                />

                <span v-if="labelPosition === 'within'"
                      class="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                    <span class="bg-base-100 text-base-content rounded-sm px-1 text-xs"
                          :class="orientation === 'vertical' && '-rotate-90'"
                    >
                        {{ percentageValue }}
                    </span>
                </span>
            </div>

            <FoProgressPercentage v-if="labelPosition === 'right' || labelPosition === 'bottom'"
                                  :orientation="orientation"
                                  :value="percentageValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Orientation }                                         from '@/Lib';
import type { HorizontalPosition }                                  from '@/Types';
import type { ProgressLabelPosition, ProgressStepProps }            from '@/UI/Components/Progress/Types';
import { computed }                                                 from 'vue';
import { FoProgressPercentage, FoProgressStepBar, FoProgressTitle } from '@/UI/Components/Progress/Internal';

interface Props extends ProgressStepProps {
    orientation?: Orientation;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
});

const numericValue = computed((): number => {
    return typeof props.value === 'number' ? props.value : props.value.value;
});

const percentageValue = computed((): string => `${numericValue.value}%`);

const labelPosition = computed((): ProgressLabelPosition | 'floating' | undefined => {
    return typeof props.value === 'number' ? undefined : props.value.label.position;
});

const labelTitle = computed((): string => {
    return typeof props.value === 'number' ? '' : props.value.label.title ?? '';
});

const hasTitle = computed((): boolean => {
    return typeof props.value !== 'number' && props.value.label.title !== undefined;
});

const isFloating = computed((): boolean => labelPosition.value === 'floating');

const isVerticalFloating = computed((): boolean => isFloating.value && props.orientation === 'vertical');

const rootClass = computed((): string => {
    if (isVerticalFloating.value || (hasTitle.value && props.orientation === 'vertical')) {
        return 'flex flex-col';
    }

    if (hasTitle.value || isFloating.value) {
        return 'flex flex-col gap-1';
    }

    if (props.orientation === 'vertical') {
        return 'flex flex-col items-center justify-between gap-1';
    }

    if (labelPosition.value === 'top' || labelPosition.value === 'bottom') {
        return 'flex flex-col gap-1';
    }

    return labelPosition.value === undefined
        ? 'flex items-center gap-x-1'
        : 'block';
});

const floatingSide = computed((): HorizontalPosition => {
    if (typeof props.value === 'number' || props.value.label.position !== 'floating') {
        return 'left';
    }

    return props.value.label.side ?? 'left';
});

function isComplete(step: number): boolean {
    return (step * 100 / props.steps) <= numericValue.value;
}
</script>
