<template>
    <component :is="hasTitle || isFloating ? 'div' : FoFragment"
               :class="isFloating && orientation !== 'vertical' && 'flex flex-col gap-1'"
    >
        <div v-if="isVerticalFloating"
             class="flex h-full gap-1"
        >
            <div v-if="floatingSide === 'left'"
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

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />
        </template>

        <div v-if="hasTitle && orientation === 'vertical'"
             class="flex h-full flex-col items-center justify-between gap-1"
        >
            <FoProgressPercentage v-if="typeof value !== 'number' && value.label.position === 'top'"
                                  :value="percentageValue"
            />

            <FoProgressTitle v-if="typeof value !== 'number' && value.label.position === 'bottom'"
                             :title="value.label.title ?? ''"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />

            <FoProgressTitle v-if="typeof value !== 'number' && value.label.position === 'top'"
                             :title="value.label.title ?? ''"
            />

            <FoProgressPercentage v-if="typeof value !== 'number' && value.label.position === 'bottom'"
                                  :value="percentageValue"
            />
        </div>

        <div v-else-if="hasTitle"
             class="flex items-end justify-between mb-1"
        >
            <template v-if="typeof value !== 'number' && ['left', 'right'].includes(value.label.position) && value.label.title !== undefined">
                <template v-if="value.label.position === 'left'">
                    <FoProgressTitle :title="value.label.title" />

                    <FoProgressPercentage :value="percentageValue" />
                </template>

                <template v-else>
                    <FoProgressPercentage :value="percentageValue" />

                    <FoProgressTitle :title="value.label.title" />
                </template>
            </template>
        </div>

        <FoProgressBody v-if="hasTitle && orientation !== 'vertical'"
                        v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }"
        />

        <div v-else-if="hasTitle === false && isFloating === false"
             class="flex items-center gap-2"
             :class="orientation === 'vertical' && 'flex-col'"
             v-bind="{ ...$attrs }"
        >
            <FoProgressPercentage v-if="typeof value !== 'number' && ['left', 'top'].includes(value.label.position) && value.label.title === undefined"
                                  :value="percentageValue"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />

            <FoProgressPercentage v-if="typeof value !== 'number' && ['right', 'bottom'].includes(value.label.position) && value.label.title === undefined"
                                  :value="percentageValue"
            />
        </div>
    </component>
</template>

<script setup lang="ts">
import type { HorizontalPosition }                               from '@/Types';
import type { ProgressProps }                                    from '@/UI/Components/Progress/Types';
import { computed }                                              from 'vue';
import { FoFragment }                                            from '@/UI/Components/Fragment/Internal';
import { FoProgressBody, FoProgressPercentage, FoProgressTitle } from '@/UI/Components/Progress/Internal';

const props = defineProps<ProgressProps>();

const numericValue = computed((): number => {
    return typeof props.value === 'number' ? props.value : props.value.value;
});

const percentageValue = computed((): string => `${numericValue.value}%`);

const hasTitle = computed((): boolean => typeof props.value !== 'number' && props.value.label.title !== undefined);

const isFloating = computed((): boolean => typeof props.value !== 'number' && props.value.label.position === 'floating');

const isVerticalFloating = computed((): boolean => isFloating.value && props.orientation === 'vertical');

const floatingSide = computed((): HorizontalPosition => {
    if (typeof props.value === 'number' || props.value.label.position !== 'floating') {
        return 'left';
    }

    return props.value.label.side ?? 'left';
});
</script>
