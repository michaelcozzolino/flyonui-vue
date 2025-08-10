<template>
    <CodeSnippet v-if="section === 'iconify'"
                 :code="IconifyIconRaw"
                 :component="IconifyIcon"
    />

    <CodeSnippet v-else-if="section === 'custom'"
                 id="custom"
                 :code="[
                     { title: 'Vue', code: CustomIconRaw },
                     { title: 'SvgIcon.vue', code: SvgIconRaw },
                 ]"
                 :component="CustomIcon"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 id="size"
                 :code="IconSizeRaw"
                 :component="IconSize"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoIcon"
    />
</template>

<script setup lang="ts">
import type { ApiType }  from '@/Api/Types/Api.ts';
import CodeSnippet       from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs from '@/Api/UI/ComponentsApiDocs.vue';
import CustomIcon        from '@/Customisation/Icons/CustomIcon.vue';
import CustomIconRaw     from '@/Customisation/Icons/CustomIcon.vue?raw';
import IconifyIcon       from '@/Customisation/Icons/IconifyIcon.vue';
import IconifyIconRaw    from '@/Customisation/Icons/IconifyIcon.vue?raw';
import IconSize          from '@/Customisation/Icons/IconSize.vue';
import IconSizeRaw       from '@/Customisation/Icons/IconSize.vue?raw';
import SvgIconRaw        from '@/Customisation/Icons/SvgIcon.vue?raw';

interface Props {
    section: 'iconify' | 'custom' | 'size' | ApiType;
}

defineProps<Props>();
</script>
