<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultKeyboardRaw"
                      :component="DefaultKeyboard"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :data-test-screenshot="section"
                      :code="KeyboardSizeRaw"
                      :component="KeyboardSize"
    />

    <ComponentPreview v-else-if="section === 'in-text'"
                      :data-test-screenshot="section"
                      :code="InTextKeyboardRaw"
                      :component="InTextKeyboard"
    />

    <ComponentPreview v-else-if="section === 'key-combinations'"
                      :data-test-screenshot="section"
                      :code="KeyCombinationsKeyboardRaw"
                      :component="KeyCombinationsKeyboard"
    />

    <ComponentPreview v-else-if="section === 'function-keys'"
                      :data-test-screenshot="section"
                      :code="FunctionKeysKeyboardRaw"
                      :component="FunctionKeysKeyboard"
    />

    <ComponentPreview v-else-if="section === 'full-keyboard'"
                      :data-test-screenshot="section"
                      :code="FullKeyboardRaw"
                      :component="FullKeyboard"
    />

    <ComponentPreview v-else-if="section === 'arrow-keys'"
                      :data-test-screenshot="section"
                      :code="ArrowKeysKeyboardRaw"
                      :component="ArrowKeysKeyboard"
    />

    <ComponentPreview v-else-if="section === 'number-keys'"
                      :data-test-screenshot="section"
                      :code="NumberKeysKeyboardRaw"
                      :component="NumberKeysKeyboard"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoKeyboard"
    />
</template>

<script setup lang="ts">
import type { ApiType }           from '@/Api/Types/Api.ts';
import type { Default }           from 'flyonui-vue';
import ComponentPreview           from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs          from '@/Api/UI/ComponentsApiDocs.vue';
import ArrowKeysKeyboard          from '@/Content/Keyboard/ArrowKeysKeyboard.vue';
import ArrowKeysKeyboardRaw       from '@/Content/Keyboard/ArrowKeysKeyboard.vue?raw';
import DefaultKeyboard            from '@/Content/Keyboard/DefaultKeyboard.vue';
import DefaultKeyboardRaw         from '@/Content/Keyboard/DefaultKeyboard.vue?raw';
import FullKeyboard               from '@/Content/Keyboard/FullKeyboard.vue';
import FullKeyboardRaw            from '@/Content/Keyboard/FullKeyboard.vue?raw';
import FunctionKeysKeyboard       from '@/Content/Keyboard/FunctionKeysKeyboard.vue';
import FunctionKeysKeyboardRaw    from '@/Content/Keyboard/FunctionKeysKeyboard.vue?raw';
import InTextKeyboard             from '@/Content/Keyboard/InTextKeyboard.vue';
import InTextKeyboardRaw          from '@/Content/Keyboard/InTextKeyboard.vue?raw';
import KeyboardSize               from '@/Content/Keyboard/KeyboardSize.vue';
import KeyboardSizeRaw            from '@/Content/Keyboard/KeyboardSize.vue?raw';
import KeyCombinationsKeyboard    from '@/Content/Keyboard/KeyCombinationsKeyboard.vue';
import KeyCombinationsKeyboardRaw from '@/Content/Keyboard/KeyCombinationsKeyboard.vue?raw';
import NumberKeysKeyboard         from '@/Content/Keyboard/NumberKeysKeyboard.vue';
import NumberKeysKeyboardRaw      from '@/Content/Keyboard/NumberKeysKeyboard.vue?raw';

interface Props {
    section: Default
        | 'size'
        | 'in-text'
        | 'key-combinations'
        | 'function-keys'
        | 'full-keyboard'
        | 'arrow-keys'
        | 'number-keys'
        | ApiType;
}

defineProps<Props>();
</script>
