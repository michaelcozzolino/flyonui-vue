<template>
    <FoAlert class="flex items-start max-sm:flex-col max-sm:items-center gap-4"
             color="primary"
             preset="soft"
    >
        <FoIcon icon="tabler:check" />

        <div class="flex flex-col grow gap-1 max-sm:items-center">
            <FoHeading class="font-semibold"
                       level="5"
                       color="primary"
            >
                Server maintenance in progress
            </FoHeading>

            <p>
                Our servers are currently undergoing maintenance.
                We apologize for any inconvenience caused and appreciate your patience.
            </p>
        </div>

        <div class="flex gap-2">
            <FoButton color="primary"
                      size="small"
            >
                Ok
            </FoButton>

            <FoButton color="secondary"
                      preset="outline"
                      size="small"
            >
                Cancel
            </FoButton>
        </div>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoButton, FoHeading, FoIcon } from 'flyonui-vue';
</script>
