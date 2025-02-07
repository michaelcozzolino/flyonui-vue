<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultMenuRaw"
                 :component="DefaultMenu"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 :code="IconMenuRaw"
                 :component="IconMenu"
    />

    <CodeSnippet v-else-if="section === 'only-icon'"
                 :code="OnlyIconMenuRaw"
                 :component="OnlyIconMenu"
    />

    <CodeSnippet v-else-if="section === 'orientation'"
                 :code="MenuOrientationRaw"
                 :component="MenuOrientation"
    />

    <CodeSnippet v-else-if="section === 'with-tooltip'"
                 :code="MenuWithTooltipRaw"
                 :component="MenuWithTooltip"
    />
</template>

<script setup lang="ts">
import CodeSnippet        from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultMenu        from '@/Navigations/Menu/DefaultMenu.vue';
import DefaultMenuRaw     from '@/Navigations/Menu/DefaultMenu.vue?raw';
import IconMenu           from '@/Navigations/Menu/IconMenu.vue';
import IconMenuRaw        from '@/Navigations/Menu/IconMenu.vue?raw';
import MenuOrientation    from '@/Navigations/Menu/MenuOrientation.vue';
import MenuOrientationRaw from '@/Navigations/Menu/MenuOrientation.vue?raw';
import MenuWithTooltip    from '@/Navigations/Menu/MenuWithTooltip.vue';
import MenuWithTooltipRaw from '@/Navigations/Menu/MenuWithTooltip.vue?raw';
import OnlyIconMenu       from '@/Navigations/Menu/OnlyIconMenu.vue';
import OnlyIconMenuRaw    from '@/Navigations/Menu/OnlyIconMenu.vue?raw';

interface Props {
    section: 'default' | 'icon' | 'only-icon' | 'orientation' | 'with-tooltip';
}

defineProps<Props>();
</script>
