<template>
    <div class="flex items-center justify-center gap-2 mt-2 mx-2">
        <FoAvatar v-for="framework in frameworks"
                  :key="framework.id"
                  :avatar="{
                      icon: framework.icon,
                      color: 'neutral',
                      preset: 'outline',
                  }"
                  class="transition-transform hover:scale-110"
                  :class="isSingleFrameworkSelected(framework.id) ? 'cursor-not-allowed' : 'cursor-pointer'"
                  shape="circle"
                  size="small"
                  :title="framework.label"
                  @click.prevent="selectFramework(framework.id)"
        >
            <template v-if="isFrameworkSelected(framework.id)"
                      #indicator
            >
                <svg class="size-3 text-primary"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="3"
                     aria-hidden="true"
                >
                    <path d="m5 12 4 4L19 6" />
                </svg>
            </template>
        </FoAvatar>
    </div>
</template>

<script setup lang="ts">
import type { FrameworkId }           from '@/.vitepress/theme/Components/Preview/Types/Preview.ts';
import { FoAvatar }                   from 'flyonui-vue';
import { storeToRefs }                from 'pinia';
import { useFrameworkSelectionStore } from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Lib/UseFrameworkSelectionStore.ts';

const { frameworks, selectedFrameworkIds } = storeToRefs(useFrameworkSelectionStore());

function selectFramework(id: FrameworkId): void {
    if (isFrameworkSelected(id)) {
        if (selectedFrameworkIds.value.length > 1) {
            selectedFrameworkIds.value = selectedFrameworkIds.value.filter(selected => selected !== id);
        }

        return;
    }

    selectedFrameworkIds.value = [...selectedFrameworkIds.value, id];
}

function isSingleFrameworkSelected(id: FrameworkId): boolean {
    return selectedFrameworkIds.value.length === 1 && isFrameworkSelected(id);
}

function isFrameworkSelected(id: FrameworkId): boolean {
    return selectedFrameworkIds.value.includes(id);
}
</script>
