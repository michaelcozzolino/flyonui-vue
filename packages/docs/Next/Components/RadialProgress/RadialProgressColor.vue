<template>
    <FoRadialProgress :value="70">
        70%
    </FoRadialProgress>

    <FoRadialProgress color="primary"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="secondary"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="accent"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="info"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="success"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="warning"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress color="error"
                      :value="70"
    >
        70%
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
