<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultCheckboxRaw"
                 :component="DefaultCheckbox"
    />

    <CodeSnippet v-else-if="section === 'with-helper-text'"
                 :code="CheckboxWithHelperTextRaw"
                 :component="CheckboxWithHelperText"
    />

    <CodeSnippet v-else-if="section === 'color'"
                 :code="CheckboxColorRaw"
                 :component="CheckboxColor"
    />

    <CodeSnippet v-else-if="section === 'with-custom-color'"
                 :code="CheckboxWithCustomColorRaw"
                 :component="CheckboxWithCustomColor"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :code="CheckboxSizeRaw"
                 :component="CheckboxSize"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 :code="CheckboxValidationStateRaw"
                 :component="CheckboxValidationState"
    />

    <CodeSnippet v-else-if="section === 'state'"
                 :code="CheckboxStateRaw"
                 :component="CheckboxState"
    />

    <CodeSnippet v-else-if="section === 'inline-group'"
                 :code="InlineCheckboxGroupRaw"
                 :component="InlineCheckboxGroup"
    />

    <CodeSnippet v-else-if="section === 'vertical-group'"
                 :code="VerticalCheckboxGroupRaw"
                 :component="VerticalCheckboxGroup"
    />
</template>

<script setup lang="ts">
import type { Default }           from 'flyonui-vue/dist/src/Shared/Types/Variants';
import CodeSnippet                from '../../.vitepress/theme/Components/CodeSnippet.vue';
import CheckboxColor              from './CheckboxColor.vue';
import CheckboxColorRaw           from './CheckboxColor.vue?raw';
import CheckboxSize               from './CheckboxSize.vue';
import CheckboxSizeRaw            from './CheckboxSize.vue?raw';
import CheckboxState              from './CheckboxState.vue';
import CheckboxStateRaw           from './CheckboxState.vue?raw';
import CheckboxValidationState    from './CheckboxValidationState.vue';
import CheckboxValidationStateRaw from './CheckboxValidationState.vue?raw';
import CheckboxWithCustomColor    from './CheckboxWithCustomColor.vue';
import CheckboxWithCustomColorRaw from './CheckboxWithCustomColor.vue?raw';
import CheckboxWithHelperText     from './CheckboxWithHelperText.vue';
import CheckboxWithHelperTextRaw  from './CheckboxWithHelperText.vue?raw';
import DefaultCheckbox            from './DefaultCheckbox.vue';
import DefaultCheckboxRaw         from './DefaultCheckbox.vue?raw';
import InlineCheckboxGroup        from './InlineCheckboxGroup.vue';
import InlineCheckboxGroupRaw     from './InlineCheckboxGroup.vue?raw';
import VerticalCheckboxGroup      from './VerticalCheckboxGroup.vue';
import VerticalCheckboxGroupRaw   from './VerticalCheckboxGroup.vue?raw';

interface Props {
    section: Default | 'with-helper-text' | 'color' | 'with-custom-color' | 'size' | 'validation-state' | 'state' | 'inline-group' | 'vertical-group';
}

defineProps<Props>();
</script>
