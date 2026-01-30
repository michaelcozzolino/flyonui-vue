<template>
    <FoAlert class="flex items-center gap-4 my-4"
             color="warning"
             preset="soft"
    >
        <FoIcon icon="line-md:alert" />

        <p class="flex flex-col">
            <span class="font-semibold">
                WARNING
            </span>

            This component is not ready for production environments,
            it is exclusively used for this website and its API might change in future releases.
            Use it at your own risk!
        </p>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoIcon } from 'flyonui-vue';
</script>
