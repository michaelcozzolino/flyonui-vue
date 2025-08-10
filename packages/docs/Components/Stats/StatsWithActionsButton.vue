<template>
    <FoStats :orientation="orientation">
        <FoStat>
            <FoStatTitle>
                Subscription Plan
            </FoStatTitle>

            <FoStatValue>
                Premium
            </FoStatValue>

            <FoStatActions>
                <FoButton color="primary"
                          preset="gradient"
                          size="small"
                >
                    Upgrade Plan
                </FoButton>
            </FoStatActions>
        </FoStat>

        <FoStat>
            <FoStatTitle>
                Next Billing Date
            </FoStatTitle>

            <FoStatValue>
                Oct 15, 2024
            </FoStatValue>

            <FoStatActions>
                <FoButton preset="soft"
                          size="small"
                >
                    View Details
                </FoButton>

                <FoButton color="warning"
                          preset="soft"
                          size="small"
                >
                    Change Payment Method
                </FoButton>
            </FoStatActions>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import {
    FoButton,
    FoStat,
    FoStatActions,
    FoStats,
    FoStatTitle,
    FoStatValue,
}                                              from 'flyonui-vue';
import { computed } from 'vue';

const breakpoints     = useBreakpoints(breakpointsTailwind);
const isGreaterThanMd = breakpoints.greater('md');

const orientation = computed(() => isGreaterThanMd.value ? 'horizontal' : 'vertical');
</script>
