<template>
    <FoButton color="primary"
              :icon="{ left: 'tabler:headphones' }"
    >
        Text with icon left
    </FoButton>

    <FoButton color="secondary"
              :icon="{ right: 'tabler:clock' }"
    >
        Text with icon right
    </FoButton>

    <FoButton color="accent"
              :icon="{ left: 'tabler:headphones', right: 'tabler:clock' }"
    >
        Text with icon left and right
    </FoButton>
</template>

<script setup lang="ts">
import { FoButton } from 'flyonui-vue';
</script>
