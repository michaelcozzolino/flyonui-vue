<template>
    <FoRadialProgress :value="60">
        <div class="mx-auto">
            60%
        </div>

        <span class="text-secondary text-xs">
            Loss
        </span>
    </FoRadialProgress>

    <FoRadialProgress :value="80">
        <div class="mx-auto">
            80%
        </div>

        <span class="text-secondary text-xs">
            Profit
        </span>
    </FoRadialProgress>
</template>

<script setup lang="ts">
import { FoRadialProgress } from 'flyonui-vue';
</script>
