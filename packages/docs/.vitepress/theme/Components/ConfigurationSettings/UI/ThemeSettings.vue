<template>
    <div class="flex gap-4">
        <FoSelectThemeController class="!w-48 mt-1"
                                 :storage-key="themeStorageKey"
                                 size="medium"
                                 font-family-var="--vp-font-family-base"
        />

        <FoSwap v-model="isLtr"
                class="text-base-content"
        >
            <template #on>
                <FoIcon icon="fluent:text-direction-horizontal-ltr-20-regular" />
            </template>

            <template #off>
                <FoIcon icon="fluent:text-direction-horizontal-rtl-20-regular" />
            </template>
        </FoSwap>
    </div>
</template>

<script setup lang="ts">
import type { TextDirection }                      from 'flyonui-vue';
import { FoIcon, FoSelectThemeController, FoSwap } from 'flyonui-vue';
import { computed }                                from 'vue';

interface Props {
    themeStorageKey: string;
}

defineProps<Props>();

const textDirection = defineModel<TextDirection>({ required: true });

const isLtr = computed({
    get: (): boolean => textDirection.value === 'ltr',
    set: (isLtr: boolean) => textDirection.value = isLtr ? 'ltr' : 'rtl',
});
</script>
