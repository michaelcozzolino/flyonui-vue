<template>
    <FoButton color="primary"
              layout="default"
    >
        Default
    </FoButton>

    <FoButton color="primary"
              layout="wide"
    >
        Wide
    </FoButton>

    <FoButton color="primary"
              layout="block"
    >
        Block
    </FoButton>

    <FoButton color="primary"
              is-responsive
    >
        Responsive
    </FoButton>

    <FoButton color="primary"
              layout="block"
              is-responsive
    >
        Responsive Block
    </FoButton>

    <FoButton color="primary"
              layout="wide"
              is-responsive
    >
        Responsive Wide
    </FoButton>
</template>

<script setup lang="ts">
import { FoButton } from 'flyonui-vue';
</script>
