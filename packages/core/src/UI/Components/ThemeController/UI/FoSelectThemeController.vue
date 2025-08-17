<template>
    <FoSelect v-model="selectedTheme"
              :label="{ text: 'Theme', type: 'floating' }"
              :options="themeOptions"
              :size="size"
    />
</template>

<script setup lang="ts">
import type { FlyonUITheme, ThemeControllerProps } from '@/UI/Components';
import type { SelectProps }                        from '@/UI/Forms';

import { FoSelect, useSelectedOption } from '@/UI/Forms';
import { useArrayMap, useColorMode }   from '@vueuse/core';
import { onMounted, toValue }          from 'vue';

const props = withDefaults(defineProps<ThemeControllerProps & Omit<SelectProps<FlyonUITheme>, 'label' | 'options'>>(), {
    initialValue: 'dark',
    attribute:    'data-theme',
    modes:        (): Record<FlyonUITheme, FlyonUITheme> => {
        return {
            light:      'light',
            dark:       'dark',
            black:      'black',
            claude:     'claude',
            corporate:  'corporate',
            ghibli:     'ghibli',
            gourmet:    'gourmet',
            luxury:     'luxury',
            mintlify:   'mintlify',
            pastel:     'pastel',
            perplexity: 'perplexity',
            shadcn:     'shadcn',
            slack:      'slack',
            soft:       'soft',
            spotify:    'spotify',
            valorant:   'valorant',
            vscode:     'vscode',
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
