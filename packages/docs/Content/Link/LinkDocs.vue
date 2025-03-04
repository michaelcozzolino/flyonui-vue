<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultLinkRaw"
                 :component="DefaultLink"
    />

    <CodeSnippet v-else-if="section === 'underline-on-hover'"
                 :code="UnderlineOnHoverLinkRaw"
                 :component="UnderlineOnHoverLink"
    />

    <CodeSnippet v-else-if="section === 'animated-underline'"
                 :code="AnimatedUnderlineLinkRaw"
                 :component="AnimatedUnderlineLink"
    />

    <CodeSnippet v-else-if="section === 'color'"
                 :code="LinkColorRaw"
                 :component="LinkColor"
    />
</template>

<script setup lang="ts">
import CodeSnippet              from '@/.vitepress/theme/Components/CodeSnippet.vue';
import AnimatedUnderlineLink    from '@/Content/Link/AnimatedUnderlineLink.vue';
import AnimatedUnderlineLinkRaw from '@/Content/Link/AnimatedUnderlineLink.vue?raw';
import DefaultLink              from '@/Content/Link/DefaultLink.vue';
import DefaultLinkRaw           from '@/Content/Link/DefaultLink.vue?raw';
import LinkColor                from '@/Content/Link/LinkColor.vue';
import LinkColorRaw             from '@/Content/Link/LinkColor.vue?raw';
import UnderlineOnHoverLink     from '@/Content/Link/UnderlineOnHoverLink.vue';
import UnderlineOnHoverLinkRaw  from '@/Content/Link/UnderlineOnHoverLink.vue?raw';

interface Props {
    section: 'default' | 'underline-on-hover' | 'animated-underline' | 'color';
}

defineProps<Props>();
</script>
