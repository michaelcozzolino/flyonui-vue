<template>
    <FoProgress class="w-56"
                :value="75"
    />

    <FoProgress class="w-56"
                color="primary"
                :value="75"
    />

    <FoProgress class="w-56"
                color="secondary"
                :value="75"
    />

    <FoProgress class="w-56"
                color="accent"
                :value="75"
    />

    <FoProgress class="w-56"
                color="info"
                :value="75"
    />

    <FoProgress class="w-56"
                color="success"
                :value="75"
    />

    <FoProgress class="w-56"
                color="warning"
                :value="75"
    />

    <FoProgress class="w-56"
                color="error"
                :value="75"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
