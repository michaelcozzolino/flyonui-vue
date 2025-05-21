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
import type { IconProps, IconType } from '@/Components/Icon';
import type { Component }           from 'vue';
import { useFlyonUIVueAppConfig }   from '@/Configuration/CreateFlyonUIVueApp';
import { useSize }                  from '@/Shared/UseSize/Internal';
import { Icon }                     from '@iconify/vue';

const props = defineProps<IconProps>();

const config = useFlyonUIVueAppConfig();

const sizeClass = useSize(config, 'FoIcon', () => props.size);

function isIconTypeComponent(icon?: IconType): icon is Component {
    return icon !== undefined
        && typeof icon !== 'string'
        && !('body' in icon); // The last condition checks whether the icon is IconifyIcon
}
</script>
