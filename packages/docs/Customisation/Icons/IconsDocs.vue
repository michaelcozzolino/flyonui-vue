<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoIcon"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomIcon                    from '@/Customisation/Icons/CustomIcon.vue';
import CustomIconRaw                 from '@/Customisation/Icons/CustomIcon.vue?raw';
import IconifyIcon                   from '@/Customisation/Icons/IconifyIcon.vue';
import IconifyIconRaw                from '@/Customisation/Icons/IconifyIcon.vue?raw';
import IconSize                      from '@/Customisation/Icons/IconSize.vue';
import IconSizeRaw                   from '@/Customisation/Icons/IconSize.vue?raw';
import SvgIconRaw                    from '@/Customisation/Icons/SvgIcon.vue?raw';
import { computed }                  from 'vue';

type Section = 'iconify' | 'custom' | 'size' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'iconify',
            {
                code:             IconifyIconRaw,
                component:        IconifyIcon,
                excludeFromTests: true,
            },
        ],
        [
            'custom',
            {
                code: [
                    { title: 'Vue', code: CustomIconRaw },
                    { title: 'SvgIcon.vue', code: SvgIconRaw },
                ],
                component: CustomIcon,
            },
        ],
        [
            'size',
            {
                code:      IconSizeRaw,
                component: IconSize,
            },
        ],
    ]);
});
</script>
