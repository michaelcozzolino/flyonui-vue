<template>
    <CodeSnippet v-if="section === 'solid'"
                 :code="SolidBadgeRaw"
                 :component="SolidBadge"
    />

    <CodeSnippet v-else-if="section === 'soft'"
                 :code="SoftBadgeRaw"
                 :component="SoftBadge"
    />

    <CodeSnippet v-else-if="section === 'outline'"
                 :code="OutlineBadgeRaw"
                 :component="OutlineBadge"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 :code="PilledBadgeRaw"
                 :component="PilledBadge"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :code="BadgeSizeRaw"
                 :component="BadgeSize"
    />

    <CodeSnippet v-else-if="section === 'dot-style'"
                 :code="DotStyleBadgeRaw"
                 :component="DotStyleBadge"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 :code="IconBadgeRaw"
                 :component="IconBadge"
                 :preview="{ columns: 8, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'icon-position'"
                 :code="IconPositionBadgeRaw"
                 :component="IconPositionBadge"
    />
</template>

<script setup lang="ts">
import CodeSnippet          from '../../.vitepress/theme/Components/CodeSnippet.vue';
import BadgeSize            from './BadgeSize.vue';
import BadgeSizeRaw         from './BadgeSize.vue?raw';
import DotStyleBadge        from './DotStyleBadge.vue';
import DotStyleBadgeRaw     from './DotStyleBadge.vue?raw';
import IconBadge            from './IconBadge.vue';
import IconBadgeRaw         from './IconBadge.vue?raw';
import IconPositionBadge    from './IconPositionBadge.vue';
import IconPositionBadgeRaw from './IconPositionBadge.vue?raw';
import OutlineBadge         from './OutlineBadge.vue';
import OutlineBadgeRaw      from './OutlineBadge.vue?raw';
import PilledBadge          from './PilledBadge.vue';
import PilledBadgeRaw       from './PilledBadge.vue?raw';
import SoftBadge            from './SoftBadge.vue';
import SoftBadgeRaw         from './SoftBadge.vue?raw';
import SolidBadge           from './SolidBadge.vue';
import SolidBadgeRaw        from './SolidBadge.vue?raw';

interface Props {
    section: 'solid' | 'soft' | 'outline' | 'pilled' | 'size' | 'dot-style' | 'icon' | 'icon-position';
}

defineProps<Props>();
</script>
