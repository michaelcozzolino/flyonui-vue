<template>
    <component :is="icon"
               v-if="isIconTypeComponent(icon)"
    />

    <Icon v-else
          :icon="icon"
    />
</template>

<script setup lang="ts">
import type { IconType }  from '@/Components/Icon/Types/Icon';
import type { Component } from 'vue';
import { Icon }           from '@iconify/vue';

interface Props {
    icon: IconType;
}

defineProps<Props>();

function isIconTypeComponent(icon?: IconType): icon is Component {
    return icon !== undefined
        && typeof icon !== 'string'
        && !('body' in icon); // The last condition checks whether the icon is IconifyIcon
}
</script>
