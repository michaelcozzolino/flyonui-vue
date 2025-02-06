<template>
    <component :is="icon"
               v-if="isIconTypeComponent(icon)"
               class="fo-icon"
    />

    <span v-else
          class="fo-icon"
          :class="sizeClass"
    >
        <Icon :icon="icon" />
    </span>
</template>

<script setup lang="ts">
import type { IconType }  from '@/Components/Icon/Types/Icon';
import type { Size }      from '@/Shared/Types/Variants';
import type { Component } from 'vue';
import { useSize }        from '@/Shared/Lib/UseElementClass';
import { Icon }           from '@iconify/vue';

interface Props {
    icon:  IconType;
    /**
     * The size of the icon that will be applied only to an iconify icon.
     * If the icon is a custom component you should define the size in that component itself.
     */
    size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});

const sizeClass = useSize('icon', () => props.size);

function isIconTypeComponent(icon?: IconType): icon is Component {
    return icon !== undefined
        && typeof icon !== 'string'
        && !('body' in icon); // The last condition checks whether the icon is IconifyIcon
}
</script>
