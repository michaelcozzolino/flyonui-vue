<template>
    <FoStats :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStat>
            <FoAvatar :avatar="{ icon: 'tabler:package', color: 'success', preset: 'soft' }"
                      shape="circle"
                      size="medium"
            />

            <FoStatValue class="mb-1">
                Order
            </FoStatValue>

            <FoStatTitle>
                7,500 of 10,000 orders
            </FoStatTitle>

            <div class="progress bg-success/10 h-2" role="progressbar" aria-label="Order Progressbar" aria-valuenow="75"
                 aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-success w-3/4" />
            </div>
        </FoStat>
    </FoStats>

    <FoStats :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStat>
            <FoAvatar :avatar="{ icon: 'tabler:cash', color: 'warning', preset: 'soft' }"
                      shape="circle"
                      size="medium"
            />

            <FoStatValue class="mb-1">
                Revenue
            </FoStatValue>

            <FoStatTitle>
                $45,000 of $100,000
            </FoStatTitle>

            <div class="progress bg-warning/10 h-2" role="progressbar" aria-label="Revenue Progressbar"
                 aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-warning w-2/5" />
            </div>
        </FoStat>
    </FoStats>

    <FoStats :class="isSmallerOrEqualToSm && 'w-full'">
        <FoStat>
            <FoAvatar :avatar="{ icon: 'tabler:credit-card', color: 'error', preset: 'soft' }"
                      shape="circle"
                      size="medium"
            />

            <FoStatValue class="mb-1">
                Invoice
            </FoStatValue>

            <FoStatTitle>
                $18,200 of $25,000
            </FoStatTitle>

            <!--            todo: progress bar component -->
            <div class="progress bg-error/10 h-2" role="progressbar" aria-label="Invoice Progressbar" aria-valuenow="73"
                 aria-valuemin="0" aria-valuemax="100"
            >
                <div class="progress-bar progress-error w-[73%]" />
            </div>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import {
    FoAvatar,
    FoStat,
    FoStats,
    FoStatTitle,
    FoStatValue,
}                                              from 'flyonui-vue';

const breakpoints          = useBreakpoints(breakpointsTailwind);
const isSmallerOrEqualToSm = breakpoints.smallerOrEqual('sm');
</script>
