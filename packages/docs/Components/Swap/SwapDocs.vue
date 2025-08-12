<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultSwapRaw"
                 :component="DefaultSwap"
    />

    <CodeSnippet v-else-if="section === 'rotation'"
                 id="rotation"
                 :code="SwapRotationRaw"
                 :component="SwapRotation"
    />

    <CodeSnippet v-else-if="section === 'flip'"
                 id="flip"
                 :code="SwapFlipRaw"
                 :component="SwapFlip"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoSwap"
    />
</template>

<script setup lang="ts">
import type { ApiType } from '@/Api/Types/Api.ts';
import type { Default } from 'flyonui-vue';

import CodeSnippet       from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs from '@/Api/UI/ComponentsApiDocs.vue';
import DefaultSwap       from '@/Components/Swap/DefaultSwap.vue';
import DefaultSwapRaw    from '@/Components/Swap/DefaultSwap.vue?raw';
import SwapFlip          from '@/Components/Swap/SwapFlip.vue';
import SwapFlipRaw       from '@/Components/Swap/SwapFlip.vue?raw';
import SwapRotation      from '@/Components/Swap/SwapRotation.vue';
import SwapRotationRaw   from '@/Components/Swap/SwapRotation.vue?raw';

interface Props {
    section: Default | 'rotation' | 'flip' | ApiType;
}

defineProps<Props>();
</script>
