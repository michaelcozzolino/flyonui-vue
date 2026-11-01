<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoPhone', 'FoPhoneDisplay']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultPhone                     from '@/Mockups/Phone/DefaultPhone.vue';
import DefaultPhoneRaw                  from '@/Mockups/Phone/DefaultPhone.vue?raw';
import PhoneWithImage                   from '@/Mockups/Phone/PhoneWithImage.vue';
import PhoneWithImageRaw                from '@/Mockups/Phone/PhoneWithImage.vue?raw';

type Section = Default
    | 'with-image';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = new Map<Section, FrameworkSectionPreview>([
    [
        'default',
        {
            vue: {
                component:   DefaultPhone,
                codePreview: DefaultPhoneRaw,
            },
        },
    ],
    [
        'with-image',
        {
            vue: {
                component:   PhoneWithImage,
                codePreview: PhoneWithImageRaw,
            },
        },
    ],
]);
</script>
