<template>
    <FoRadialProgress color="neutral"
                      :value="70"
                      style="--size:12rem; --thickness: 2px;"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="neutral"
                      :value="70"
                      style="--size:12rem; --thickness: 2rem;"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="primary"
                      :value="70"
                      style="--size:12rem; --thickness: 1rem;"
    >
        70%
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
