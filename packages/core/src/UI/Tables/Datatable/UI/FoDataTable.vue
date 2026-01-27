<template>
    <div class="w-full bg-base-100 flex flex-col rounded-md shadow-base-300/20 shadow-sm">
        <FoDataTableControls v-if="controlsPosition === 'both' || controlsPosition === 'up'"
                             v-model:query="query"
                             v-model:max-items-per-page-option="maxItemsPerPageOption"
                             v-model:page="safePage"
                             :is-searchable="isSearchable"
                             :page-options="pageOptions"
                             :total-pages="totalPages"
        >
            <template v-if="$slots.info">
                <slot name="info"
                      :from="safePage * itemsPerPage - (itemsPerPage - 1)"
                      :to="(safePage * itemsPerPage) > items.length ? items.length : safePage * itemsPerPage"
                      :length="items.length"
                />
            </template>
        </FoDataTableControls>

        <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden">
                    <FoTable>
                        <template v-if="$slots.head"
                                  #head
                        >
                            <slot name="head" />
                        </template>

                        <template v-if="$slots.body"
                                  #body
                        >
                            <slot v-if="filterableItems.length"
                                  name="body"
                            />

                            <FoTableRow v-else>
                                <FoTableColumn :colspan="totalHeaderColumns">
                                    <div class="py-10 px-5 flex flex-col justify-center items-center text-center">
                                        <FoIcon class="shrink-0"
                                                icon="tabler:search"
                                        />

                                        <div class="max-w-sm mx-auto">
                                            <p class="mt-2 text-sm text-base-content/80">
                                                No search results
                                            </p>
                                        </div>
                                    </div>
                                </FoTableColumn>
                            </FoTableRow>
                        </template>

                        <template v-if="$slots.footer"
                                  #footer
                        >
                            <slot name="footer" />
                        </template>
                    </FoTable>
                </div>
            </div>
        </div>

        <FoDataTableControls v-if="controlsPosition === 'both' || controlsPosition === 'down'"
                             v-model:query="query"
                             v-model:max-items-per-page-option="maxItemsPerPageOption"
                             v-model:page="safePage"
                             :is-searchable="isSearchable"
                             :page-options="pageOptions"
                             :total-pages="totalPages"
        >
            <template v-if="$slots.info">
                <slot name="info"
                      :from="safePage * itemsPerPage - (itemsPerPage - 1)"
                      :to="(safePage * itemsPerPage) > items.length ? items.length : safePage * itemsPerPage"
                      :length="items.length"
                />
            </template>
        </FoDataTableControls>
    </div>
</template>

<script setup lang="ts" generic="T extends object">
import type { SelectOption }                  from '@/UI/Forms';
import type { DatatableProps, TableSlots }    from '@/UI/Tables';
import type { Slot }                          from 'vue';
import { FoIcon }                             from '@/UI/Customization';
import { useSelectedOption }                  from '@/UI/Forms';
import { FoTable, FoTableColumn, FoTableRow } from '@/UI/Tables';
import { FoDataTableControls }                from '@/UI/Tables/Datatable/Internal/UI';
import { isDefined, useArrayMap }             from '@vueuse/core';
import { computed, watch }                    from 'vue';

const props = withDefaults(defineProps<DatatableProps>(), {
    useAjax:          false,
    controlsPosition: 'down',
    isSearchable:     false,
});

const slots = defineSlots<TableSlots & {
    /** The info to show about the displayed rows */
    info?: Slot;
}>();

const items         = defineModel<T[]>('items', { required: true });
const filteredItems = defineModel<T[]>('filteredItems', { required: true });
const page          = defineModel<number>('page', { required: true });
const itemsPerPage  = defineModel<number>('itemsPerPage', { required: true });
const query         = defineModel<string>('query', { required: false, default: '' });

const filterableItems = computed((): T[] => query.value === '' ? items.value : filteredItems.value);

const totalPages = computed((): number => {
    return Math.max(1, Math.ceil(filterableItems.value.length / itemsPerPage.value));
});

const pageOptions = useArrayMap(
    (): number[] => typeof props.rowsPerPage === 'number' ? [props.rowsPerPage] : props.rowsPerPage,
    (perPage: number): SelectOption => ({ id: perPage, text: `${perPage}` }),
);

const maxItemsPerPageOption = useSelectedOption(pageOptions, itemsPerPage);

const safePage = computed<number>({
    get: (): number => {
        const len = totalPages.value;

        if (page.value < 1) {
            return 1;
        }

        if (page.value > len) {
            return len;
        }

        return page.value;
    },
    set: (newPage: number): void => {
        page.value = newPage;
    },
});

/**
 * The number of <th> that the developer is using through the head slot
 */
const totalHeaderColumns = computed((): number => {
    const vNodes   = slots.head?.() ?? [];
    const children = vNodes[0]?.children;

    if (isDefined(children) === false || typeof children !== 'object' || Array.isArray(children)) {
        return 0;
    }

    return typeof children.default === 'function' ? children.default()?.length : 0;
});

watch([safePage, itemsPerPage, query], () => {
    if (props.useAjax) {
        return;
    }

    let sourceItems = items.value;

    if (query.value !== '') {
        sourceItems = items.value.filter((item: T): boolean => {
            for (const key of Object.keys(item) as (keyof T)[]) {
                const value = JSON.stringify(item[key]).toLowerCase();

                if (value.includes(query.value.toLowerCase())) {
                    return true;
                }
            }

            return false;
        });
    }

    const start = (safePage.value - 1) * itemsPerPage.value;
    const end   = start + itemsPerPage.value;

    filteredItems.value = sourceItems.slice(start, end);
}, { immediate: true });
</script>
