<template>
    <FoTableHeader :colspan="colspan" :rowspan="rowspan">
        <slot />

        <div v-if="filter !== undefined"
             class="dropdown relative inline-flex"
        >
            <FoIcon icon="tabler:filter" />

            <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-auto"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-default"
            >
                <li v-for="f in filter[0]"
                    :key="f"
                    class="dropdown-item item-name"
                    @click.prevent="items = items.filter((item): boolean => filter?.[1](item, f) ?? true)"
                >
                    {{ f }}
                </li>
            </ul>
        </div>
    </FoTableHeader>
</template>

<script setup lang="ts" generic="Item extends object, Filter extends string | number">
import type { WithDefaultSlot } from '@/Types';
import type { TableCellProps }  from '@/UI/Tables';
import { FoIcon }               from '@/UI/Customization';
import { FoTableHeader  }       from '@/UI/Tables';

interface DatatableHeaderProps<Item extends object, Filter extends string | number> extends TableCellProps {
    filter?: [Filter[], (item: Item, filter: Filter) => boolean];
}
const props = defineProps<DatatableHeaderProps<Item, Filter>>();

defineSlots<WithDefaultSlot>();

const items        = defineModel<Item[]>('items', { default: [] });
</script>
