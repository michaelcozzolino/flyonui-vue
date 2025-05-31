<template>
    <CodeSnippet v-if="section === 'solid'"
                 id="solid"
                 :code="SolidBadgeRaw"
                 :component="SolidBadge"
    />

    <CodeSnippet v-else-if="section === 'soft'"
                 id="soft"
                 :code="SoftBadgeRaw"
                 :component="SoftBadge"
    />

    <CodeSnippet v-else-if="section === 'outline'"
                 id="outline"
                 :code="OutlineBadgeRaw"
                 :component="OutlineBadge"
    />

    <CodeSnippet v-else-if="section === 'dash'"
                 id="dash"
                 :code="DashedBadgeRaw"
                 :component="DashedBadge"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 id="pilled"
                 :code="PilledBadgeRaw"
                 :component="PilledBadge"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 id="size"
                 :code="BadgeSizeRaw"
                 :component="BadgeSize"
    />

    <CodeSnippet v-else-if="section === 'dot-style'"
                 id="dot-style"
                 :code="DotStyleBadgeRaw"
                 :component="DotStyleBadge"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 id="icon"
                 :code="IconBadgeRaw"
                 :component="IconBadge"
                 :preview="{ columns: 8, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'icon-position'"
                 id="icon-position"
                 :code="IconPositionBadgeRaw"
                 :component="IconPositionBadge"
    />

    <CodeSnippet v-else-if="section === 'in-a-button'"
                 id="in-a-button"
                 :code="BadgeInAButtonRaw"
                 :component="BadgeInAButton"
    />
</template>

<script setup lang="ts">
import CodeSnippet          from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import BadgeInAButton       from '@/Components/Badge/BadgeInAButton.vue';
import BadgeInAButtonRaw    from '@/Components/Badge/BadgeInAButton.vue?raw';
import BadgeSize            from '@/Components/Badge/BadgeSize.vue';
import BadgeSizeRaw         from '@/Components/Badge/BadgeSize.vue?raw';
import DashedBadge          from '@/Components/Badge/DashedBadge.vue';
import DashedBadgeRaw       from '@/Components/Badge/DashedBadge.vue?raw';
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

// todo: dismissible badges
interface Props {
    section: 'solid' | 'soft' | 'outline' | 'dash' | 'pilled' | 'size' | 'dot-style' | 'icon' | 'icon-position' | 'in-a-button';
}

defineProps<Props>();
</script>
