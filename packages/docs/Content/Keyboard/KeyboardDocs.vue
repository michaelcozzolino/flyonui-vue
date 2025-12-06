<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoKeyboard"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ArrowKeysKeyboard             from '@/Content/Keyboard/ArrowKeysKeyboard.vue';
import ArrowKeysKeyboardRaw          from '@/Content/Keyboard/ArrowKeysKeyboard.vue?raw';
import DefaultKeyboard               from '@/Content/Keyboard/DefaultKeyboard.vue';
import DefaultKeyboardRaw            from '@/Content/Keyboard/DefaultKeyboard.vue?raw';
import FullKeyboard                  from '@/Content/Keyboard/FullKeyboard.vue';
import FullKeyboardRaw               from '@/Content/Keyboard/FullKeyboard.vue?raw';
import FunctionKeysKeyboard          from '@/Content/Keyboard/FunctionKeysKeyboard.vue';
import FunctionKeysKeyboardRaw       from '@/Content/Keyboard/FunctionKeysKeyboard.vue?raw';
import InTextKeyboard                from '@/Content/Keyboard/InTextKeyboard.vue';
import InTextKeyboardRaw             from '@/Content/Keyboard/InTextKeyboard.vue?raw';
import KeyboardSize                  from '@/Content/Keyboard/KeyboardSize.vue';
import KeyboardSizeRaw               from '@/Content/Keyboard/KeyboardSize.vue?raw';
import KeyCombinationsKeyboard       from '@/Content/Keyboard/KeyCombinationsKeyboard.vue';
import KeyCombinationsKeyboardRaw    from '@/Content/Keyboard/KeyCombinationsKeyboard.vue?raw';
import NumberKeysKeyboard            from '@/Content/Keyboard/NumberKeysKeyboard.vue';
import NumberKeysKeyboardRaw         from '@/Content/Keyboard/NumberKeysKeyboard.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'size'
    | 'in-text'
    | 'key-combinations'
    | 'function-keys'
    | 'full-keyboard'
    | 'arrow-keys'
    | 'number-keys'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultKeyboardRaw,
                component: DefaultKeyboard,
            },
        ],
        [
            'size',
            {
                code:      KeyboardSizeRaw,
                component: KeyboardSize,
            },
        ],
        [
            'in-text',
            {
                code:      InTextKeyboardRaw,
                component: InTextKeyboard,
            },
        ],
        [
            'key-combinations',
            {
                code:      KeyCombinationsKeyboardRaw,
                component: KeyCombinationsKeyboard,
            },
        ],
        [
            'function-keys',
            {
                code:      FunctionKeysKeyboardRaw,
                component: FunctionKeysKeyboard,
            },
        ],
        [
            'full-keyboard',
            {
                code:      FullKeyboardRaw,
                component: FullKeyboard,
            },
        ],
        [
            'arrow-keys',
            {
                code:      ArrowKeysKeyboardRaw,
                component: ArrowKeysKeyboard,
            },
        ],
        [
            'number-keys',
            {
                code:      NumberKeysKeyboardRaw,
                component: NumberKeysKeyboard,
            },
        ],
    ]);
});
</script>
