<template>
    <div class="flex items-center px-5 py-3 gap-3">
        <FoInputText v-if="isSearchable"
                     v-model="query"
                     class="max-w-60"
                     size="small"
                     :icon="{ left: 'tabler:search' }"
                     placeholder="Search for items"
        />

        <div v-if="pageOptions.length > 1"
             class="flex flex-1 items-center justify-end gap-3"
        >
            <FoSelect v-model="maxItemsPerPageOption"
                      :options="pageOptions"
            />
        </div>
    </div>

    <div
        class="border-base-content/25 flex items-center border-b px-5 py-3 gap-3 max-md:flex-wrap max-md:justify-center"
    >
        <div v-if="$slots.default"
             class="text-base-content/80 text-sm"
        >
            <slot />
        </div>

        <!-- These classes are a bit different from flyonui because they don't use the standard pagination they implemented -->
        <div class="flex flex-1 items-center justify-end max-md:justify-center space-x-1">
            <FoPagination v-model="page"
                          :length="totalPages"
                          size="extraSmall"
                          shape="circle"
                          hide-text="always"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SelectOption }           from '@/UI/Forms';
import type { DatatableControlsProps } from '@/UI/Tables/Datatable/Internal/Types';
import { FoInputText, FoSelect }       from '@/UI/Forms';
import { FoPagination }                from '@/UI/Navigations';

defineProps<DatatableControlsProps>();

const query                 = defineModel<string>('query', { required: true });
const maxItemsPerPageOption = defineModel<SelectOption>('maxItemsPerPageOption', { required: true });
const page                  = defineModel<number>('page', { required: true });
</script>
