<template>
    <FoSelect v-model="selectedTheme"
              :label="{ text: 'Theme', type: 'floating' }"
              :options="themeOptions"
              :size="size"
    />
</template>

<script setup lang="ts">
import type { SelectProps }                        from '@/Components/Select';
import type { FlyonUITheme, ThemeControllerProps } from '@/Components/ThemeController';

import { FoSelect, useSelectedOption } from '@/Components/Select';
import { useArrayMap, useColorMode }   from '@vueuse/core';
import { onMounted, toValue }          from 'vue';

const props = withDefaults(defineProps<ThemeControllerProps & Omit<SelectProps<FlyonUITheme>, 'label' | 'options'>>(), {
    initialValue: 'dark',
    attribute:    'data-theme',
    modes:        (): Record<FlyonUITheme, FlyonUITheme> => {
        return {
            light:     'light',
            dark:      'dark',
            gourmet:   'gourmet',
            corporate: 'corporate',
            ghibli:    'ghibli',
            luxury:    'luxury',
            mintlify:  'mintlify',
            shadcn:    'shadcn',
            slack:     'slack',
            soft:      'soft',
            valorant:  'valorant',
        };
    },
});

const themeOptions = useArrayMap(() => Object.values(props.modes), (mode: FlyonUITheme) => ({
    id:   mode,
    text: mode,
}));

const selectedTheme = useSelectedOption(themeOptions, useColorMode<FlyonUITheme>(props));

onMounted(() => {
    if (toValue(props.initialValue) in props.modes === false) {
        throw new Error(`The initial theme ${props.initialValue} is not available.`);
    }
});
</script>
