<template>
    <CodeSnippet v-if="section === 'default'"
                 :id="section"
                 :code="DefaultKeyboardRaw"
                 :component="DefaultKeyboard"
    />

    <CodeSnippet v-if="section === 'size'"
                 :id="section"
                 :code="KeyboardSizeRaw"
                 :component="KeyboardSize"
    />

    <CodeSnippet v-if="section === 'in-text'"
                 :id="section"
                 :code="InTextKeyboardRaw"
                 :component="InTextKeyboard"
    />

    <CodeSnippet v-if="section === 'key-combinations'"
                 :id="section"
                 :code="KeyCombinationsKeyboardRaw"
                 :component="KeyCombinationsKeyboard"
    />

    <CodeSnippet v-if="section === 'function-keys'"
                 :id="section"
                 :code="FunctionKeysKeyboardRaw"
                 :component="FunctionKeysKeyboard"
    />

    <CodeSnippet v-if="section === 'full-keyboard'"
                 :id="section"
                 :code="FullKeyboardRaw"
                 :component="FullKeyboard"
    />

    <CodeSnippet v-if="section === 'arrow-keys'"
                 :id="section"
                 :code="ArrowKeysKeyboardRaw"
                 :component="ArrowKeysKeyboard"
    />

    <CodeSnippet v-if="section === 'number-keys'"
                 :id="section"
                 :code="NumberKeysKeyboardRaw"
                 :component="NumberKeysKeyboard"
    />
</template>

<script setup lang="ts">
import type { Default }           from 'flyonui-vue';
import CodeSnippet                from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
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
    section: Default | 'size' | 'in-text' | 'key-combinations' | 'function-keys' | 'full-keyboard' | 'arrow-keys' | 'number-keys';
}

defineProps<Props>();
</script>
