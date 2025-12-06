<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultSwapRaw"
                      :component="DefaultSwap"
    />

    <ComponentPreview v-else-if="section === 'rotation'"
                      :data-test-screenshot="section"
                      :code="SwapRotationRaw"
                      :component="SwapRotation"
    />

    <ComponentPreview v-else-if="section === 'flip'"
                      :data-test-screenshot="section"
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

import ComponentPreview  from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
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
