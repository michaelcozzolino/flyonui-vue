<template>
    <FoRadialProgress :value="70">
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'primary', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'secondary', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'accent', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'info', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'success', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'warning', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>

    <FoRadialProgress :background="{ color: 'error', preset: 'soft' }"
                      :value="70"
    >
        70%
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
