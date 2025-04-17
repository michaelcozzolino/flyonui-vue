<template>
    <FoButton color="primary"
              preset="soft"
    >
        Inbox

        <FoBadge color="primary"
                 size="small"
        >
            +99
        </FoBadge>
    </FoButton>

    <FoButton color="primary"
              preset="soft"
    >
        Send

        <FoBadge class="size-6"
                 color="primary"
                 :icon="{ left: 'tabler:send' }"
        />
    </FoButton>
</template>

<script setup lang="ts">
import { FoBadge, FoButton } from 'flyonui-vue';
</script>
