<template>
    <FoLoadingButton color="primary"
                     :is-loading="isLoading"
                     :icon="{ position: 'left' }"
                     :text="{ loading: 'Saving', notLoading: 'Save' }"
                     @click.prevent="isLoading = !isLoading"
    />

    <FoLoadingButton color="primary"
                     :is-loading="isLoading"
                     :icon="{ animation: 'dots', position: 'right' }"
                     :text="{ loading: 'Saving', notLoading: 'Save' }"
                     @click.prevent="isLoading = !isLoading"
    />

    <FoLoadingButton color="primary"
                     shape="circle"
    />

    <FoLoadingButton color="primary"
                     :icon="{ animation: 'ring' }"
                     shape="square"
    />

    <FoLoadingButton color="primary"
                     :icon="{ animation: 'bars' }"
                     shape="square"
    />
</template>

<script setup lang="ts">
import FoLoadingButton from '@/Components/Button/FoLoadingButton.vue';
import { ref }         from 'vue';

const isLoading = ref<boolean>(true);
</script>
