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
import CodeSnippet                from '@/.vitepress/theme/Components/CodeSnippet.vue';
import CheckboxColor              from '@/Forms/Checkbox/CheckboxColor.vue';
import CheckboxColorRaw           from '@/Forms/Checkbox/CheckboxColor.vue?raw';
import CheckboxSize               from '@/Forms/Checkbox/CheckboxSize.vue';
import CheckboxSizeRaw            from '@/Forms/Checkbox/CheckboxSize.vue?raw';
import CheckboxState              from '@/Forms/Checkbox/CheckboxState.vue';
import CheckboxStateRaw           from '@/Forms/Checkbox/CheckboxState.vue?raw';
import CheckboxValidationState    from '@/Forms/Checkbox/CheckboxValidationState.vue';
import CheckboxValidationStateRaw from '@/Forms/Checkbox/CheckboxValidationState.vue?raw';
import CheckboxWithCustomColor    from '@/Forms/Checkbox/CheckboxWithCustomColor.vue';
import CheckboxWithCustomColorRaw from '@/Forms/Checkbox/CheckboxWithCustomColor.vue?raw';
import CheckboxWithHelperText     from '@/Forms/Checkbox/CheckboxWithHelperText.vue';
import CheckboxWithHelperTextRaw  from '@/Forms/Checkbox/CheckboxWithHelperText.vue?raw';
import DefaultCheckbox            from '@/Forms/Checkbox/DefaultCheckbox.vue';
import DefaultCheckboxRaw         from '@/Forms/Checkbox/DefaultCheckbox.vue?raw';
import InlineCheckboxGroup        from '@/Forms/Checkbox/InlineCheckboxGroup.vue';
import InlineCheckboxGroupRaw     from '@/Forms/Checkbox/InlineCheckboxGroup.vue?raw';
import VerticalCheckboxGroup      from '@/Forms/Checkbox/VerticalCheckboxGroup.vue';
import VerticalCheckboxGroupRaw   from '@/Forms/Checkbox/VerticalCheckboxGroup.vue?raw';

interface Props {
    section: Default | 'with-helper-text' | 'color' | 'with-custom-color' | 'size' | 'validation-state' | 'state' | 'inline-group' | 'vertical-group';
}

defineProps<Props>();
</script>
