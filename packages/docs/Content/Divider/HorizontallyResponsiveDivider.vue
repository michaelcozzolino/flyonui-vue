<template>
    <div class="flex w-full flex-col gap-5 lg:flex-row">
        <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm" />

        <FoDivider :class="orientation === 'horizontal' && 'h-32!'"
                   color="base"
                   :orientation="orientation"
        >
            OR
        </FoDivider>

        <div class="shadow-base-300/20 bg-base-200 grid h-32 grow place-items-center shadow-sm" />
    </div>
</template>

<script setup lang="ts">
import type { Orientation }                    from 'flyonui-vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { FoDivider  }                          from 'flyonui-vue';
import { computed }                            from 'vue';

const { greaterOrEqual } = useBreakpoints(breakpointsTailwind);

const orientation = computed((): Orientation => greaterOrEqual('lg').value ? 'horizontal' : 'vertical');
</script>
