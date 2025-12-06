<template>
    <div class="vp-raw">
        <FoButtonGroup class="w-full rounded-t-lg bg-[#334155]"
                       :class="title === undefined ? 'justify-end' : 'justify-between'"
        >
            <FoButton v-if="title !== undefined"
                      color="primary"
                      class="rounded-none rounded-tl-lg"
            >
                {{ title }}
            </FoButton>

            <CopyButton class="rounded-none rounded-tr-lg"
                        :text="code"
            />
        </FoButtonGroup>

        <CodeSnippet :language="lang"
                     :code="code"
        />
    </div>
</template>

<script setup lang="ts">
import type { CodePreviewProps }   from '@/.vitepress/theme/Components/Preview/Types/Preview';
import CopyButton                  from '@/.vitepress/theme/Components/Preview/UI/CopyButton.vue';
import plugin                      from '@highlightjs/vue-plugin';
import { FoButton, FoButtonGroup } from 'flyonui-vue';

defineProps<CodePreviewProps>();

const CodeSnippet = plugin.component;
</script>

<style lang="css">
@reference "tailwindcss";

.hljs {
    @apply rounded-b-lg text-[16px]! max-h-[500px];
}
</style>
