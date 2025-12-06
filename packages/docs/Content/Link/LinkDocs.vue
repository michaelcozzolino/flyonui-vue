<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultLinkRaw"
                      :component="DefaultLink"
    />

    <ComponentPreview v-else-if="section === 'underline-on-hover'"
                      :data-test-screenshot="section"
                      :code="UnderlineOnHoverLinkRaw"
                      :component="UnderlineOnHoverLink"
    />

    <ComponentPreview v-else-if="section === 'animated-underline'"
                      :data-test-screenshot="section"
                      :code="AnimatedUnderlineLinkRaw"
                      :component="AnimatedUnderlineLink"
    />

    <ComponentPreview v-else-if="section === 'color'"
                      :data-test-screenshot="section"
                      :code="LinkColorRaw"
                      :component="LinkColor"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoLink"
    />
</template>

<script setup lang="ts">
import type { ApiType }         from '@/Api/Types/Api.ts';
import ComponentPreview         from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs        from '@/Api/UI/ComponentsApiDocs.vue';
import AnimatedUnderlineLink    from '@/Content/Link/AnimatedUnderlineLink.vue';
import AnimatedUnderlineLinkRaw from '@/Content/Link/AnimatedUnderlineLink.vue?raw';
import DefaultLink              from '@/Content/Link/DefaultLink.vue';
import DefaultLinkRaw           from '@/Content/Link/DefaultLink.vue?raw';
import LinkColor                from '@/Content/Link/LinkColor.vue';
import LinkColorRaw             from '@/Content/Link/LinkColor.vue?raw';
import UnderlineOnHoverLink     from '@/Content/Link/UnderlineOnHoverLink.vue';
import UnderlineOnHoverLinkRaw  from '@/Content/Link/UnderlineOnHoverLink.vue?raw';

interface Props {
    section: 'default' | 'underline-on-hover' | 'animated-underline' | 'color' | ApiType;
}

defineProps<Props>();
</script>
