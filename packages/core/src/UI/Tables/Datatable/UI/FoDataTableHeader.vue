<template>
    <FoTableHeader :colspan="colspan"
                   :rowspan="rowspan"
    >
        <div class="flex items-center gap-2">
            <slot />

            <div v-if="filter !== undefined"
                 class="dropdown relative inline-flex"
            >
                <FoIcon class="cursor-pointer hover:text-warning"
                        :class="(selectedDropdownFilterValue !== null || isRangeFilterSet) && 'text-warning'"
                        icon="tabler:filter"
                        :size="{ height: 14, width: 14 }"
                        @click.prevent="showFilterValues = !showFilterValues"
                />

                <ul v-show="showFilterValues"
                    ref="dropdown"
                    class="dropdown-menu absolute inset-e-0 top-full z-10 mt-2 w-auto opacity-100"
                    role="menu"
                    aria-orientation="vertical"
                >
                    <template v-if="filter.type === 'select'">
                        <li v-for="value in filter.values"
                            :key="value"
                            class="cursor-pointer dropdown-item item-name"
                            :class="selectedDropdownFilterValue === value && 'text-warning'"
                            @click.prevent="onDropdownFilterClick(value)"
                        >
                            {{ value }}
                        </li>
                    </template>

                    <div v-else
                         class="flex gap-x-2 max-w-sm"
                    >
                        <FoInputText v-model="rangeFilterValues.min"
                                     class="w-24"
                                     placeholder="min"
                        />

                        <FoInputText v-model="rangeFilterValues.max"
                                     class="w-24"
                                     placeholder="max"
                        />
                    </div>
                </ul>
            </div>
        </div>
    </FoTableHeader>
</template>

<script setup lang="ts" generic="Item extends object, Value extends string">
import type { WithDefaultSlot }                              from '@/Types';
import type { DataTableColumnFilters, DataTableHeaderProps } from '@/UI/Tables';
import type { DataTableColumnFilterContext }                 from '@/UI/Tables/Datatable/Internal/Lib';
import { useSafeInjection }                                  from '@/Lib/UseSafeInjection/Internal';
import { FoIcon }                                            from '@/UI/Customization';
import { FoInputText }                                       from '@/UI/Forms';
import { FoTableHeader }                                     from '@/UI/Tables';
import {
    dataTableColumnFilterInjectionKey,
} from '@/UI/Tables/Datatable/Internal/Lib';
import { onClickOutside }                       from '@vueuse/core';
import { computed, ref, useTemplateRef, watch } from 'vue';

const props = defineProps<DataTableHeaderProps<Item, Value>>();

defineSlots<WithDefaultSlot>();

const filterKey       = Symbol('dataTableHeaderFilter');
const dataTableFilter = useSafeInjection<DataTableColumnFilterContext<Item>>(dataTableColumnFilterInjectionKey);

const selectedDropdownFilterValue = ref<Value | null>(null);
const showFilterValues            = ref<boolean>(false);

const rangeFilterValues = ref<{ min: string; max: string }>({ min: '', max: '' });

const isRangeFilterSet = computed((): boolean => {
    const min = rangeFilterValues.value.min === '' ? Number.NaN : +rangeFilterValues.value.min;
    const max = rangeFilterValues.value.max === '' ? Number.NaN : +rangeFilterValues.value.max;

    return !(Number.isNaN(min) && Number.isNaN(max));
});

const dropdownElement = useTemplateRef('dropdown');

onClickOutside(dropdownElement, (): void => {
    showFilterValues.value = false;
});

watch(selectedDropdownFilterValue, () => {
    if (props.filter === undefined) {
        return;
    }

    if (selectedDropdownFilterValue.value === null) {
        dataTableFilter.setFilter(filterKey, null);

        return;
    }

    dataTableFilter.setFilter(filterKey, (item: Item): boolean => {
        guardAgainstNotDefinedFilter(props.filter);

        if (props.filter.type !== 'select') {
            throw new Error('Trying to set a select filter when the filter type is not.');
        }

        return props.filter.onFilter(item, selectedDropdownFilterValue.value);
    });
}, { immediate: true });

watch(rangeFilterValues, onNumberFilter, { deep: true });

function onDropdownFilterClick(value: Value): void {
    guardAgainstNotDefinedFilter(props.filter);

    if (props.filter.type !== 'select') {
        throw new Error('Trying to set a select filter when the filter type is not.');
    }

    if (selectedDropdownFilterValue.value === value) {
        selectedDropdownFilterValue.value = null;
        showFilterValues.value = false;

        return;
    }

    selectedDropdownFilterValue.value = value;

    dataTableFilter.setFilter(filterKey, (item: object): boolean => {
        guardAgainstNotDefinedFilter(props.filter);

        if (props.filter.type !== 'select') {
            throw new Error('Trying to set a select filter when the filter type is not.');
        }

        return props.filter.onFilter(item as Item, value);
    });

    showFilterValues.value = false;
}

function onNumberFilter(): void {
    guardAgainstNotDefinedFilter(props.filter);

    if (props.filter.type !== 'range') {
        throw new Error('Trying to set a select filter when the filter type is not.');
    }

    if (isRangeFilterSet.value === false) {
        dataTableFilter.setFilter(filterKey, null);

        return;
    }

    const min = rangeFilterValues.value.min === '' ? Number.NaN : +rangeFilterValues.value.min;
    const max = rangeFilterValues.value.max === '' ? Number.NaN : +rangeFilterValues.value.max;

    dataTableFilter.setFilter(filterKey, (item: object): boolean => {
        guardAgainstNotDefinedFilter(props.filter);

        if (props.filter.type !== 'range') {
            throw new Error('Trying to set a select filter when the filter type is not.');
        }

        const itemProperty = props.filter.getValue(item as Item);

        if (Number.isNaN(min) && itemProperty <= max) {
            return true;
        }

        if (Number.isNaN(max) && itemProperty >= min) {
            return true;
        }

        if (itemProperty >= min && itemProperty <= max) {
            return true;
        }

        return false;
    });
}

function guardAgainstNotDefinedFilter(filter: typeof props.filter): asserts filter is DataTableColumnFilters<Item, Value> {
    if (filter === undefined) {
        throw new Error('Unable to apply filter when it is not defined.');
    }
}
</script>
