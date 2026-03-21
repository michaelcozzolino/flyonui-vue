<template>
    <FoDiff>
        <template #first>
            <div class="bg-primary text-primary-content grid place-content-center text-4xl sm:text-7xl font-black">
                FlyonUI Vue
            </div>
        </template>

        <template #second>
            <div class="bg-base-200 grid place-content-center text-4xl sm:text-7xl font-black">
                FlyonUI Vue
            </div>
        </template>
    </FoDiff>
</template>

<script setup lang="ts">
import { FoDiff } from 'flyonui-vue';
</script>
