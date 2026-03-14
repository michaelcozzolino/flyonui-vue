<template>
    <FoAlert class="flex items-start gap-4"
             color="primary"
             preset="soft"
    >
        <FoIcon icon="tabler:info-circle" />

        <div class="flex flex-col gap-1">
            <FoHeading class="font-semibold"
                       level="5"
                       color="primary"
            >
                Please ensure that your password meets the following requirements:
            </FoHeading>

            <ul class="mt-1.5 list-inside list-disc">
                <li>Contains a minimum of 10 characters and a maximum of 100 characters.</li>
                <li>Includes at least one lowercase character.</li>
                <li>Incorporates at least one special character such as !, @, #, or ?.</li>
            </ul>
        </div>
    </FoAlert>
</template>

<script setup lang="ts">
import { FoAlert, FoHeading, FoIcon } from 'flyonui-vue';
</script>
