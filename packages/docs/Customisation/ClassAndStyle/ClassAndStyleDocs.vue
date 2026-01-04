<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ClassToComponent              from '@/Customisation/ClassAndStyle/ClassToComponent.vue';
import ClassToComponentRaw           from '@/Customisation/ClassAndStyle/ClassToComponent.vue?raw';
import StyleToComponent              from '@/Customisation/ClassAndStyle/StyleToComponent.vue';
import StyleToComponentRaw           from '@/Customisation/ClassAndStyle/StyleToComponent.vue?raw';
import WrapperToComponent            from '@/Customisation/ClassAndStyle/WrapperToComponent.vue';
import WrapperToComponentRaw         from '@/Customisation/ClassAndStyle/WrapperToComponent.vue?raw';
import { computed }                  from 'vue';

type Section = 'class-to-component' | 'style-to-component' | 'wrapper-to-component';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'class-to-component',
            {
                code:      ClassToComponentRaw,
                component: ClassToComponent,
            },
        ],
        [
            'style-to-component',
            {
                code:      StyleToComponentRaw,
                component: StyleToComponent,
            },
        ],
        [
            'wrapper-to-component',
            {
                code:      WrapperToComponentRaw,
                component: WrapperToComponent,
            },
        ],
    ]);
});
</script>
