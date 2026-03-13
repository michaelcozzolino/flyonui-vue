<template>
    <FoDivider class="after:border-t-2 before:border-t-2"
               color="base"
    >
        Solid
    </FoDivider>

    <FoDivider class="after:border-t-4 before:border-t-4"
               color="base"
               preset="dot"
    >
        Dotted
    </FoDivider>

    <FoDivider class="after:border-t-8 before:border-t-8"
               color="base"
               preset="dash"
    >
        Dashed
    </FoDivider>
</template>

<script setup lang="ts">
import { FoDivider } from 'flyonui-vue';
</script>
