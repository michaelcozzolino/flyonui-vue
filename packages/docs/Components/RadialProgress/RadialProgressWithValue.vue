<template>
    <FoRadialProgress :value="0">
        0%
    </FoRadialProgress>

    <FoRadialProgress :value="20">
        20%
    </FoRadialProgress>

    <FoRadialProgress :value="60">
        60%
    </FoRadialProgress>

    <FoRadialProgress :value="80">
        80%
    </FoRadialProgress>

    <FoRadialProgress :value="100">
        100%
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
