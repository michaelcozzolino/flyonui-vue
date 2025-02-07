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
import CodeSnippet          from '@/.vitepress/theme/Components/CodeSnippet.vue';
import BadgeSize            from '@/Components/Badge/BadgeSize.vue';
import BadgeSizeRaw         from '@/Components/Badge/BadgeSize.vue?raw';
import DotStyleBadge        from '@/Components/Badge/DotStyleBadge.vue';
import DotStyleBadgeRaw     from '@/Components/Badge/DotStyleBadge.vue?raw';
import IconBadge            from '@/Components/Badge/IconBadge.vue';
import IconBadgeRaw         from '@/Components/Badge/IconBadge.vue?raw';
import IconPositionBadge    from '@/Components/Badge/IconPositionBadge.vue';
import IconPositionBadgeRaw from '@/Components/Badge/IconPositionBadge.vue?raw';
import OutlineBadge         from '@/Components/Badge/OutlineBadge.vue';
import OutlineBadgeRaw      from '@/Components/Badge/OutlineBadge.vue?raw';
import PilledBadge          from '@/Components/Badge/PilledBadge.vue';
import PilledBadgeRaw       from '@/Components/Badge/PilledBadge.vue?raw';
import SoftBadge            from '@/Components/Badge/SoftBadge.vue';
import SoftBadgeRaw         from '@/Components/Badge/SoftBadge.vue?raw';
import SolidBadge           from '@/Components/Badge/SolidBadge.vue';
import SolidBadgeRaw        from '@/Components/Badge/SolidBadge.vue?raw';

interface Props {
    section: 'solid' | 'soft' | 'outline' | 'pilled' | 'size' | 'dot-style' | 'icon' | 'icon-position';
}

defineProps<Props>();
</script>
