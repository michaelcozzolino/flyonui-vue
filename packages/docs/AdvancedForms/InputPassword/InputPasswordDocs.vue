<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoInputPassword"
    />
</template>

<script setup lang="ts">
import type { Default }                   from 'flyonui-vue';
import type { FrameworkSectionPreview }   from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                       from 'vue';
import ComponentDocs                      from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultInputPassword               from '@/AdvancedForms/InputPassword/DefaultInputPassword.vue';
import DefaultInputPasswordRaw            from '@/AdvancedForms/InputPassword/DefaultInputPassword.vue?raw';
import InputPasswordWithAllRulesAtOnce    from '@/AdvancedForms/InputPassword/InputPasswordWithAllRulesAtOnce.vue';
import InputPasswordWithAllRulesAtOnceRaw from '@/AdvancedForms/InputPassword/InputPasswordWithAllRulesAtOnce.vue?raw';
import InputPasswordWithLabel             from '@/AdvancedForms/InputPassword/InputPasswordWithLabel.vue';
import InputPasswordWithLabelRaw          from '@/AdvancedForms/InputPassword/InputPasswordWithLabel.vue?raw';
import InputPasswordWithMultipleRules     from '@/AdvancedForms/InputPassword/InputPasswordWithMultipleRules.vue';
import InputPasswordWithMultipleRulesRaw  from '@/AdvancedForms/InputPassword/InputPasswordWithMultipleRules.vue?raw';

type Section = Default
    | 'with-label'
    | 'with-multiple-rules'
    | 'with-all-rules-at-once';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    component:   DefaultInputPassword,
                    codePreview: DefaultInputPasswordRaw,
                },
            },
        ],
        [
            'with-label',
            {
                vue: {
                    component:   InputPasswordWithLabel,
                    codePreview: InputPasswordWithLabelRaw,
                },
            },
        ],
        [
            'with-multiple-rules',
            {
                vue: {
                    component:   InputPasswordWithMultipleRules,
                    codePreview: InputPasswordWithMultipleRulesRaw,
                },
            },
        ],
        [
            'with-all-rules-at-once',
            {
                vue: {
                    component:   InputPasswordWithAllRulesAtOnce,
                    codePreview: InputPasswordWithAllRulesAtOnceRaw,
                },
            },
        ],
    ]);
});
</script>
