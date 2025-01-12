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
import CodeSnippet        from '../../Components/Button/CodeSnippet.vue';
import DefaultMenu        from './DefaultMenu.vue';
import DefaultMenuRaw     from './DefaultMenu.vue?raw';
import IconMenu           from './IconMenu.vue';
import IconMenuRaw        from './IconMenu.vue?raw';
import MenuOrientation    from './MenuOrientation.vue';
import MenuOrientationRaw from './MenuOrientation.vue?raw';
import MenuWithTooltip    from './MenuWithTooltip.vue';
import MenuWithTooltipRaw from './MenuWithTooltip.vue?raw';
import OnlyIconMenu       from './OnlyIconMenu.vue';
import OnlyIconMenuRaw    from './OnlyIconMenu.vue?raw';

interface Props {
    section: 'default' | 'icon' | 'only-icon' | 'orientation' | 'with-tooltip';
}

defineProps<Props>();
</script>
