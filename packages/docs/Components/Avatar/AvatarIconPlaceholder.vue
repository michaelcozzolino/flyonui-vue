<template>
    <FoAvatar :avatar="{ icon: 'tabler:user', color: 'neutral' }"
              shape="circle"
              size="extraSmall"
    />

    <FoAvatar :avatar="{ icon: 'tabler:user', color: 'neutral' }"
              shape="circle"
              size="small"
    />

    <FoAvatar :avatar="{ icon: 'tabler:user', color: 'neutral' }"
              shape="circle"
    />

    <FoAvatar :avatar="{ icon: 'tabler:user', color: 'neutral' }"
              shape="circle"
              size="large"
    />

    <FoAvatar :avatar="{ icon: 'tabler:user', color: 'neutral' }"
              shape="circle"
              size="extraLarge"
    />
</template>

<script setup lang="ts">
import { FoAvatar } from 'flyonui-vue';
</script>
