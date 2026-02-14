<template>
    <FoAlert class="flex items-center gap-4"
             color="warning"
    >
        <FoIcon icon="tabler:alert-triangle" />

        <p>
            <span class="text-lg font-semibold">
                Warning alert:
            </span>

            Stay informed about the latest updates and upcoming events.
        </p>
    </FoAlert>

    <FoAlert class="flex items-center gap-4"
             color="success"
    >
        <FoIcon icon="tabler:circle-check" />

        <p>
            <span class="text-lg font-semibold">
                Success alert:
            </span>

            Explore our recent achievements and upcoming events.
        </p>
    </FoAlert>

    <FoAlert class="flex items-center gap-4"
             color="warning"
             preset="soft"
    >
        <FoIcon icon="tabler:alert-triangle" />

        <p>
            <span class="text-lg font-semibold">
                Warning alert:
            </span>

            Take note of important updates and upcoming events.
        </p>
    </FoAlert>

    <FoAlert class="flex items-center gap-4"
             color="success"
             preset="soft"
    >
        <FoIcon icon="tabler:circle-check" />

        <p>
            <span class="text-lg font-semibold">
                Success alert:
            </span>

            Celebrate our successes and stay informed about upcoming events.
        </p>
    </FoAlert>

    <FoAlert class="flex items-center gap-4"
             color="warning"
             preset="outline"
    >
        <FoIcon icon="tabler:alert-triangle" />

        <p>
            <span class="text-lg font-semibold">
                Warning alert:
            </span>

            Pay attention to warnings and stay updated about upcoming events.
        </p>
    </FoAlert>

    <FoAlert class="flex items-center gap-4"
             color="success"
             preset="outline"
    >
        <FoIcon icon="tabler:circle-check" />

        <p>
            <span class="text-lg font-semibold">
                Success alert:
            </span>

            Be aware of important notices and upcoming events.
        </p>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoIcon } from 'flyonui-vue';
</script>
