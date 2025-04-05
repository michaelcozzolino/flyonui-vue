<template>
    <FoStatList :orientation="orientation">
        <FoStatListItem>
            <FoStatListItemTitle>
                Subscription Plan
            </FoStatListItemTitle>

            <FoStatListItemValue>
                Premium
            </FoStatListItemValue>

            <FoStatListItemActions>
                <FoButton color="primary"
                          preset="gradient"
                          size="small"
                >
                    Upgrade Plan
                </FoButton>
            </FoStatListItemActions>
        </FoStatListItem>

        <FoStatListItem>
            <FoStatListItemTitle>
                Next Billing Date
            </FoStatListItemTitle>

            <FoStatListItemValue>
                Oct 15, 2024
            </FoStatListItemValue>

            <FoStatListItemActions>
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
            </FoStatListItemActions>
        </FoStatListItem>
    </FoStatList>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import {
    FoButton,
    FoStatList,
    FoStatListItem,
    FoStatListItemActions,
    FoStatListItemTitle,
    FoStatListItemValue,
}                                              from 'flyonui-vue';
import { computed } from 'vue';

const breakpoints     = useBreakpoints(breakpointsTailwind);
const isGreaterThanMd = breakpoints.greater('md');

const orientation = computed(() => isGreaterThanMd.value ? 'horizontal' : 'vertical');
</script>
