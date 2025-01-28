<template>
    <FoBadge color="primary"
             :icon="{ left: 'tabler:headphones' }"
    >
        Text with icon left
    </FoBadge>

    <FoBadge color="secondary"
             :icon="{ right: 'tabler:clock' }"
    >
        Text with icon right
    </FoBadge>

    <FoBadge color="accent"
             :icon="{ left: 'tabler:headphones', right: 'tabler:clock' }"
    >
        Text with icon left and right
    </FoBadge>
</template>

<script setup lang="ts">
import { FoBadge } from 'flyonui-vue';
</script>
