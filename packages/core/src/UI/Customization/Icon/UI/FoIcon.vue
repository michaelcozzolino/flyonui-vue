<template>
    <component :is="icon"
               v-if="isComponentIcon(icon)"
               :class="iconClass"
    />

    <span v-else-if="sizeClass"
          :class="[iconClass]"
    >
        <Icon :icon="icon"
              :height="sizeClass?.height"
              :width="sizeClass?.width"
        />
    </span>
</template>

<script setup lang="ts">
import type { IconSize }                         from '@/Lib';
import type { Dimension2D, IconProps, IconType } from '@/UI/Customization';
import type { Component }                        from 'vue';
import { Icon }                                  from '@iconify/vue';
import { computed }                              from 'vue';

const props = defineProps<IconProps>();

const [
    iconClass,
    sizeClass,
] = [
    'fo-icon',
    computed((): Dimension2D | undefined => {
        if ('size' in props === false) {
            return undefined;
        }

        const size = props.size;

        if (typeof size === 'object') {
            return size;
        }

        const sizes: Record<IconSize, Dimension2D> = {
            doubleExtraSmall: { height: 12, width: 12 },
            extraSmall:       { height: 16, width: 16 },
            small:            { height: 20, width: 20 },
            medium:           { height: 24, width: 24 },
            large:            { height: 32, width: 32 },
            extraLarge:       { height: 48, width: 48 },
            doubleExtraLarge: { height: 96, width: 96 },
        };

        return sizes[size ?? 'medium'];
    }),
];

function isComponentIcon(icon: IconType): icon is Component {
    return typeof icon !== 'string';
}
</script>
