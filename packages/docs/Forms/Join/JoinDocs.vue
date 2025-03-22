<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultJoinRaw"
                 :component="DefaultJoin"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 :code="JoinIconRaw"
                 :component="JoinIcon"
    />

    <CodeSnippet v-else-if="section === 'vertical'"
                 :code="VerticalJoinRaw"
                 :component="VerticalJoin"
    />

    <CodeSnippet v-else-if="section === 'responsive'"
                 :code="ResponsiveJoinRaw"
                 :component="ResponsiveJoin"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 :code="PilledJoinRaw"
                 :component="PilledJoin"
    />
</template>

<script setup lang="ts">
import type { Default }  from 'flyonui-vue';
import CodeSnippet       from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultJoin       from '@/Forms/Join/DefaultJoin.vue';
import DefaultJoinRaw    from '@/Forms/Join/DefaultJoin.vue?raw';
import JoinIcon          from '@/Forms/Join/JoinIcon.vue';
import JoinIconRaw       from '@/Forms/Join/JoinIcon.vue?raw';
import PilledJoin        from '@/Forms/Join/PilledJoin.vue';
import PilledJoinRaw     from '@/Forms/Join/PilledJoin.vue?raw';
import ResponsiveJoin    from '@/Forms/Join/ResponsiveJoin.vue';
import ResponsiveJoinRaw from '@/Forms/Join/ResponsiveJoin.vue?raw';
import VerticalJoin      from '@/Forms/Join/VerticalJoin.vue';
import VerticalJoinRaw   from '@/Forms/Join/VerticalJoin.vue?raw';

interface Props {
    section: Default | 'icon' | 'vertical' | 'responsive' | 'pilled';
}

defineProps<Props>();
</script>
