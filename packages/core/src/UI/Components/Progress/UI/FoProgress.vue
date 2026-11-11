<template>
    <component :is="hasTitle || isFloating ? 'div' : FoFragment"
               :class="isFloating && 'flex flex-col gap-1'"
    >
        <FoProgressPercentage v-if="isFloating"
                              is-floating
                              :value="percentageValue"
        />

        <div v-if="hasTitle"
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

        <FoProgressBody v-if="hasTitle"
                        v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }"
        />

        <div v-else
             class="flex items-center gap-2"
        >
            <FoProgressPercentage v-if="typeof value !== 'number' && value.label.position === 'left' && value.label.title === undefined"
                                  :value="percentageValue"
            />

            <FoProgressBody v-bind="{ ...$props, ...$attrs, numericValue, percentageValue }" />

            <FoProgressPercentage v-if="typeof value !== 'number' && value.label.position === 'right' && value.label.title === undefined"
                                  :value="percentageValue"
            />
        </div>
    </component>
</template>

<script setup lang="ts">
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
</script>
