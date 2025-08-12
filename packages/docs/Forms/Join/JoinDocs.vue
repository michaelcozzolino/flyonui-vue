<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultJoinRaw"
                 :component="DefaultJoin"
    />

    <CodeSnippet v-else-if="section === 'icon'"
                 id="icon"
                 :code="JoinIconRaw"
                 :component="JoinIcon"
    />

    <CodeSnippet v-else-if="section === 'vertical'"
                 id="vertical"
                 :code="VerticalJoinRaw"
                 :component="VerticalJoin"
    />

    <CodeSnippet v-else-if="section === 'responsive'"
                 id="responsive"
                 :code="ResponsiveJoinRaw"
                 :component="ResponsiveJoin"
    />

    <CodeSnippet v-else-if="section === 'pilled'"
                 id="pilled"
                 :code="PilledJoinRaw"
                 :component="PilledJoin"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoJoin"
    />
</template>

<script setup lang="ts">
import type { ApiType }  from '@/Api/Types/Api.ts';
import type { Default }  from 'flyonui-vue';
import CodeSnippet       from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs from '@/Api/UI/ComponentsApiDocs.vue';
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
    section: Default | 'icon' | 'vertical' | 'responsive' | 'pilled' | ApiType;
}

defineProps<Props>();
</script>
