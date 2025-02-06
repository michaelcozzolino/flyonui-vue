<template>
    <FoButton color="primary">
        Default
    </FoButton>

    <FoButton color="primary"
              is-active
    >
        Active
    </FoButton>

    <FoButton color="primary"
              is-disabled
    >
        Disabled
    </FoButton>

    <FoButton color="primary"
              is-active
              is-disabled
    >
        Active & Disabled
    </FoButton>
</template>

<script setup lang="ts">
import { FoButton } from 'flyonui-vue';
</script>
