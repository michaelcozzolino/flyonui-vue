<template>
    <div class="flex gap-5">
        <FoProgress class="h-56"
                    orientation="vertical"
                    :value="{ value: 25, label: { position: 'floating' } }"
        />

        <FoProgress class="h-56"
                    orientation="vertical"
                    :value="{ value: 50, label: { position: 'floating', side: 'right' } }"
        />
    </div>

    <div class="flex gap-5">
        <FoProgress class="h-56"
                    color="primary"
                    orientation="vertical"
                    :value="{ value: 75, label: { position: 'floating' } }"
        />

        <FoProgress class="h-56"
                    color="primary"
                    orientation="vertical"
                    :value="{ value: 100, label: { position: 'floating', side: 'right' } }"
        />
    </div>
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
