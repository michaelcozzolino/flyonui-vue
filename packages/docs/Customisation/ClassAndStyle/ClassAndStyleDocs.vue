<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ClassToComponent                 from '@/Customisation/ClassAndStyle/ClassToComponent.vue';
import ClassToComponentRaw              from '@/Customisation/ClassAndStyle/ClassToComponent.vue?raw';
import StyleToComponent                 from '@/Customisation/ClassAndStyle/StyleToComponent.vue';
import StyleToComponentRaw              from '@/Customisation/ClassAndStyle/StyleToComponent.vue?raw';
import WrapperToComponent               from '@/Customisation/ClassAndStyle/WrapperToComponent.vue';
import WrapperToComponentRaw            from '@/Customisation/ClassAndStyle/WrapperToComponent.vue?raw';

type Section = 'class-to-component' | 'style-to-component' | 'wrapper-to-component';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'class-to-component',
            {
                vue: {
                    codePreview: ClassToComponentRaw,
                    component:   ClassToComponent,
                },
            },
        ],
        [
            'style-to-component',
            {
                vue: {
                    codePreview: StyleToComponentRaw,
                    component:   StyleToComponent,
                },
            },
        ],
        [
            'wrapper-to-component',
            {
                vue: {
                    codePreview: WrapperToComponentRaw,
                    component:   WrapperToComponent,
                },
            },
        ],
    ]);
});
</script>
