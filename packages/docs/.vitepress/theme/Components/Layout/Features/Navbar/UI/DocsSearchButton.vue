<template>
    <div class="flex pr-2">
        <FoButton color="primary"
                  preset="outline"
                  :shape="isSmallerOrEqualToSm ? 'square' : undefined"
                  icon="tabler:search"
        >
            <template v-if="!isSmallerOrEqualToSm">
                Search

                <FoKeyboard class="ml-auto"
                            size="small"
                >
                    Ctrl K
                </FoKeyboard>
            </template>
        </FoButton>
    </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { FoButton, FoKeyboard }                from 'flyonui-vue';

const isSmallerOrEqualToSm = useBreakpoints(breakpointsTailwind).smallerOrEqual('sm');
</script>
