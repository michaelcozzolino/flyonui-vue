<template>
    <suspense>
        <SuspensibleLayout />

        <template #fallback>
            <div class="flex min-h-screen items-center justify-center">
                <FoLoading color="primary"
                           size="extraLarge"
                />
            </div>
        </template>
    </suspense>
</template>

<script setup lang="ts">
import SuspensibleLayout from '@/.vitepress/theme/Components/Layout/UI/SuspensibleLayout.vue';
import { FoLoading }     from 'flyonui-vue';
</script>
