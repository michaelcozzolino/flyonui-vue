<template>
    <ul class="menu"
        :class="[orientationClass, sizeClass]"
    >
        <FoMenuTitle v-if="title">
            {{ title }}
        </FoMenuTitle>

        <FoMenuItem v-for="item in items"
                    :key="item.to.toString()"
                    :item="item"
        >
            <FoMenu v-if="item.children?.length"
                    :items="item.children"
                    :orientation="orientation"
            />
        </FoMenuItem>
    </ul>
</template>

<script setup lang="ts">
import type { MenuItem }                   from '@/Components/Menu/Types/Menu';
import type { Orientation, Size }          from '@/Shared/Types/Variants';
import { FoMenu, FoMenuItem, FoMenuTitle } from '@/Components/Menu';
import { useOrientation, useSize }         from '@/Shared/Lib/UseElementClass';

interface Props {
    items:        MenuItem[];
    orientation?: Orientation;
    size?:        Size;
    title?:       string;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'vertical',
    size:        'default',
});

const orientationClass = useOrientation('menu', () => props.orientation);
const sizeClass        = useSize('menu', () => props.size);
</script>
