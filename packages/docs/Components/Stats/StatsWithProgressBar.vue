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
            <FoProgress class="h-2"
                        color="success"
                        :value="75"
            />
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

            <FoProgress class="h-2"
                        color="warning"
                        :value="45"
            />
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

            <FoProgress class="h-2"
                        color="error"
                        :value="73"
            />
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import {
    FoAvatar,
    FoProgress,
    FoStat,
    FoStats,
    FoStatTitle,
    FoStatValue,
}                                              from 'flyonui-vue';

const breakpoints          = useBreakpoints(breakpointsTailwind);
const isSmallerOrEqualToSm = breakpoints.smallerOrEqual('sm');
</script>
