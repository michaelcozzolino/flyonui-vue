<template>
    <FoRadialProgress :value="70">
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'primary' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'secondary' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'accent' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'info' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'success' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'warning' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'error' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
