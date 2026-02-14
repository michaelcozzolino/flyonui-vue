<template>
    <FoAlert class="flex items-center gap-4 my-4"
             color="info"
             preset="soft"
    >
        <FoIcon icon="tabler:info-circle" />

        <div class="flex flex-col">
            <span class="font-semibold">
                TIP
            </span>
            <div>
                <slot />
            </div>
        </div>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoIcon } from 'flyonui-vue';
</script>
