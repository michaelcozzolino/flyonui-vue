<template>
    <FoAlert class="flex items-start gap-4"
             color="primary"
             preset="soft"
    >
        <FoIcon icon="tabler:check" />

        <div class="flex flex-col gap-1">
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
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoHeading, FoIcon } from 'flyonui-vue';
</script>
