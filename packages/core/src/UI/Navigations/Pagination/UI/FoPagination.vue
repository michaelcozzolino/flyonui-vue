<template>
    <nav class="flex items-center gap-x-1"
         :class="alignmentClass"
    >
        <FoPaginationButton :icon="{ left: icon?.previous ?? (isTextHidden ? 'tabler:chevron-left' : undefined) }"
                            :preset="preset"
                            :shape="shape"
                            :size="size"
                            :is-disabled="currentPage === 1"
                            @click.prevent="currentPage > 1 && currentPage--"
        >
            {{ isTextHidden ? '' : 'Previous' }}
        </FoPaginationButton>

        <div class="flex items-center gap-x-1">
            <template v-for="pageItem in pageItems"
                      :key="pageItem"
            >
                <FoButton v-if="typeof pageItem === 'number'"
                          class="aria-[current='page']:text-bg-primary"
                          :class="roundedNoneClass"
                          :aria-current="pageItem === currentPage ? 'page' : undefined"
                          :preset="preset"
                          :shape="shape"
                          :size="size"
                          @click.prevent="currentPage = pageItem"
                >
                    {{ pageItem }}
                </FoButton>

                <FoButton v-else
                          :icon="{ left: 'tabler:dots' }"
                          :class="roundedNoneClass"
                          :preset="preset"
                          :shape="shape"
                          :size="size"
                          is-disabled
                          aria-hidden="true"
                          tabindex="-1"
                />
            </template>
        </div>

        <FoPaginationButton :icon="{ right: icon?.next ?? (isTextHidden ? 'tabler:chevron-right' : undefined) }"
                            :preset="preset"
                            :shape="shape"
                            :size="size"
                            :is-disabled="currentPage === length"
                            @click.prevent="currentPage < length && currentPage++"
        >
            {{ isTextHidden ? '' : 'Next' }}
        </FoPaginationButton>
    </nav>
</template>

<script setup lang="ts">
import type { ComponentName }                  from '@/Lib';
import type { PaginationProps }                from '@/UI/Navigations';
import { useAlignment }                        from '@/Lib/UseAlignment/Internal';
import { FoButton }                            from '@/UI/Components';
import { useRoundedNone }                      from '@/UI/Navigations/Pagination/Internal';
import FoPaginationButton                      from '@/UI/Navigations/Pagination/Internal/UI/FoPaginationButton.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { computed, watch }                     from 'vue';

const props = withDefaults(defineProps<PaginationProps>(), {
    alignment: 'left',
    preset:    'text',
    shape:     'rounded',
    hideText:  'never',
});

const currentPage = defineModel<number>({ required: true });

const componentName: ComponentName = 'FoPagination';

const breakpoints = useBreakpoints(breakpointsTailwind);

const [alignmentClass, roundedNoneClass] = [
    useAlignment(componentName, () => props.alignment),
    useRoundedNone(() => props.shape),

];

const isTextHidden = computed((): boolean => {
    if (props.hideText === 'always') {
        return true;
    }

    if (props.hideText === 'never') {
        return false;
    }

    return breakpoints.smallerOrEqual(props.hideText).value;
});

type Ellipsis = 'left-ellipsis' | 'right-ellipsis';
type PageItem = number | Ellipsis;

/** It Builds page list like: 1 … 14 15 16 17 18 … 20 */
const pageItems = computed<PageItem[]>(() => {
    const siblings = 2; // how many pages on each side of current page (… 14 15 [16] 17 18 …)
    const boundaries = 1; // how many pages to always show at the edges (1 … … 20)
    const totalPages = props.length;
    const current = currentPage.value;

    if (totalPages < 1) {
        return [];
    }

    // Edge always-visible pages
    const startPages: number[] = [];

    for (let i = 1; i <= Math.min(boundaries, totalPages); i++) {
        startPages.push(i);
    }

    const endPages: number[] = [];

    for (let i = Math.max(totalPages - boundaries + 1, 1); i <= totalPages; i++) {
        endPages.push(i);
    }

    // Sliding window around current
    const left = Math.max(current - siblings, boundaries + 1);
    const right = Math.min(current + siblings, totalPages - boundaries);

    const middle: number[] = [];

    for (let i = left; i <= right; i++) {
        middle.push(i);
    }

    const pages: PageItem[] = [];

    pages.push(...startPages);

    // Left ellipsis if there is a gap between start and middle
    if (middle.length && middle[0] > (startPages.at(-1)! + 1)) {
        pages.push('left-ellipsis');
    }

    // Middle window
    pages.push(...middle);

    // Right ellipsis if there is a gap between middle and end
    if (middle.length && endPages[0] > (middle.at(-1)! + 1)) {
        pages.push('right-ellipsis');
    }

    // Right boundary, avoid duplicates
    for (const endPage of endPages) {
        if (pages.includes(endPage) === false)
            pages.push(endPage);
    }

    return pages;
});

watch(currentPage, (newPage: number) => {
    if (newPage <= 0 || newPage > props.length) {
        throw new Error(`Page ${newPage} is not valid.`);
    }
}, { immediate: true });
</script>
