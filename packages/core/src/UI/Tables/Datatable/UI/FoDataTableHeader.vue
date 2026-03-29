<template>
    <FoTableHeader :colspan="colspan"
                   :rowspan="rowspan"
    >
        <div class="flex items-center gap-2">
            <slot />

            <div v-if="isStringFilter(filter.values)"
                 class="dropdown relative inline-flex"
            >
                <FoIcon class="cursor-pointer hover:text-warning"
                        :class="selectedFilterValue !== null && 'text-warning'"
                        icon="tabler:filter"
                        size="doubleExtraSmall"
                        @click.prevent="showFilterValues = !showFilterValues"
                />

                <ul v-show="showFilterValues"
                    ref="dropdown"
                    class="dropdown-menu absolute inset-e-0 top-full z-10 mt-2 w-auto opacity-100"
                    role="menu"
                    aria-orientation="vertical"
                >
                    <li v-for="value in filter.values"
                        :key="value"
                        class="cursor-pointer dropdown-item item-name"
                        :class="selectedFilterValue === value && 'text-warning'"
                        @click.prevent="onFilterClick(value)"
                    >
                        {{ value }}
                    </li>
                </ul>
            </div>
        </div>
    </FoTableHeader>
</template>

<script setup lang="ts" generic="Item extends object, Value extends string | number">
import type { WithDefaultSlot }              from '@/Types';
import type { DataTableHeaderProps }         from '@/UI/Tables';
import type { DataTableColumnFilterContext } from '@/UI/Tables/Datatable/Internal/Lib';
import { useSafeInjection }                  from '@/Lib/UseSafeInjection/Internal';
import { FoIcon }                            from '@/UI/Customization';
import { FoTableHeader }                     from '@/UI/Tables';
import {

    dataTableColumnFilterInjectionKey,
} from '@/UI/Tables/Datatable/Internal/Lib';
import { onClickOutside }             from '@vueuse/core';
import { ref, useTemplateRef, watch } from 'vue';

const props = defineProps<DataTableHeaderProps<Item, Value>>();

defineSlots<WithDefaultSlot>();

const filterKey       = Symbol('dataTableHeaderFilter');
const dataTableFilter = useSafeInjection<DataTableColumnFilterContext<Item>>(dataTableColumnFilterInjectionKey);

const selectedFilterValue = ref<Value | null>(null);
const showFilterValues    = ref<boolean>(false);

const dropdownElement = useTemplateRef('dropdown');

onClickOutside(dropdownElement, (): void => {
    showFilterValues.value = false;
});

watch(selectedFilterValue, () => {
    if (selectedFilterValue.value === null) {
        dataTableFilter.setFilter(filterKey, null);

        return;
    }

    dataTableFilter.setFilter(filterKey, (item: Item): boolean => {
        return props.filter.onFilter(item, selectedFilterValue.value);
    });
}, { immediate: true });

function isStringFilter<T extends Value>(filterValues: T[]): filterValues is (T & string)[] {
    for (const value of filterValues) {
        if (typeof value !== 'string') {
            return false;
        }
    }

    return true;
}

function onFilterClick(value: Value & string) {
    if (selectedFilterValue.value === value) {
        selectedFilterValue.value = null;
        showFilterValues.value = false;

        return;
    }

    selectedFilterValue.value = value;

    dataTableFilter.setFilter(filterKey, (item: object): boolean => {
        return props.filter.onFilter(item as Item, value);
    });

    showFilterValues.value = false;
}
</script>
