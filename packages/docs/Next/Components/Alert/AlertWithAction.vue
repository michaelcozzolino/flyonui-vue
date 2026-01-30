<template>
    <FoAlert color="primary"
             preset="soft"
    >
        Please read the

        <FoLink to="#"
                color="primary"
                class="font-semibold"
        >
            policy
        </FoLink>
        .

        These can be configured in Settings.

        <div class="mt-4 flex gap-2">
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
import { FoAlert, FoButton, FoLink } from 'flyonui-vue';
</script>
