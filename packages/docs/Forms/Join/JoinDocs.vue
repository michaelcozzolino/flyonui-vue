<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultJoinRaw"
                      :component="DefaultJoin"
    />

    <ComponentPreview v-else-if="section === 'icon'"
                      :data-test-screenshot="section"
                      :code="JoinIconRaw"
                      :component="JoinIcon"
    />

    <ComponentPreview v-else-if="section === 'vertical'"
                      :data-test-screenshot="section"
                      :code="VerticalJoinRaw"
                      :component="VerticalJoin"
    />

    <ComponentPreview v-else-if="section === 'responsive'"
                      :data-test-screenshot="section"
                      :code="ResponsiveJoinRaw"
                      :component="ResponsiveJoin"
    />

    <ComponentPreview v-else-if="section === 'pilled'"
                      :data-test-screenshot="section"
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
import ComponentPreview  from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
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
