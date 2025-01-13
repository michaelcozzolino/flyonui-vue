<template>
    <FoButton color="primary">
        Default
    </FoButton>

    <FoButton color="primary"
              is-active
    >
        Active
    </FoButton>

    <FoButton color="primary"
              :is-active="false"
    >
        Disabled
    </FoButton>
</template>

<script setup lang="ts">
import FoButton from '@/Components/Button/UI/FoButton.vue';
</script>
