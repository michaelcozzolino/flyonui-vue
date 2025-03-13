<template>
    <FoStatList :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStatListItem>
            <div class="avatar placeholder">
                <div class="bg-success/20 text-success size-10 rounded-full">
                    <FoIcon icon="tabler:package"
                            size="doubleExtraLarge"
                    />
                </div>
            </div>

            <FoStatListItemValue class="mb-1">
                Order
            </FoStatListItemValue>

            <FoStatListItemTitle>
                7,500 of 10,000 orders
            </FoStatListItemTitle>

            <div class="progress bg-success/10 h-2" role="progressbar" aria-label="Order Progressbar" aria-valuenow="75"
                 aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-success w-3/4" />
            </div>
        </FoStatListItem>
    </FoStatList>

    <FoStatList :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStatListItem>
            <div class="avatar placeholder">
                <div class="bg-warning/20 text-warning size-10 rounded-full">
                    <FoIcon icon="tabler:cash"
                            size="doubleExtraLarge"
                    />
                </div>
            </div>

            <FoStatListItemValue class="mb-1">
                Revenue
            </FoStatListItemValue>

            <FoStatListItemTitle>
                $45,000 of $100,000
            </FoStatListItemTitle>

            <div class="progress bg-warning/10 h-2" role="progressbar" aria-label="Revenue Progressbar"
                 aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-warning w-2/5" />
            </div>
        </FoStatListItem>
    </FoStatList>

    <FoStatList :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStatListItem>
            <!--            todo: avatar component -->
            <div class="avatar placeholder">
                <div class="bg-error/20 text-error size-10 rounded-full">
                    <FoIcon icon="tabler:credit-card"
                            size="doubleExtraLarge"
                    />
                </div>
            </div>

            <FoStatListItemValue class="mb-1">
                Invoice
            </FoStatListItemValue>

            <FoStatListItemTitle>
                $18,200 of $25,000
            </FoStatListItemTitle>

            <!--            todo: progress bar component -->
            <div class="progress bg-error/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73"
                 aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-error w-[73%]" />
            </div>
        </FoStatListItem>
    </FoStatList>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import {
    FoIcon,
    FoStatList,
    FoStatListItem,
    FoStatListItemTitle,
    FoStatListItemValue,
}                                              from 'flyonui-vue';

const breakpoints          = useBreakpoints(breakpointsTailwind);
const isSmallerOrEqualToSm = breakpoints.smallerOrEqual('sm');
</script>
