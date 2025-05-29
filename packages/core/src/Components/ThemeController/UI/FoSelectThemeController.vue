<template>
    <FoSelect v-model="selectedTheme"
              :label="{ text: 'Theme', type: 'floating' }"
              :options="themeOptions"
              :size="size"
    />
</template>

<script setup lang="ts">
import type { SelectOption, SelectProps } from '@/Components/Select';

import type { FlyonUITheme, ThemeControllerProps } from '@/Components/ThemeController';
import { FoSelect, useSelectedOption }             from '@/Components/Select';
import { useArrayMap, useColorMode }               from '@vueuse/core';
import { computed, onMounted, toValue }            from 'vue';

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

type ThemeOption = SelectOption<FlyonUITheme>;

const themeOptions = useArrayMap(() => Object.values(props.modes), (mode: FlyonUITheme) => ({
    id:   mode,
    text: mode,
}));

const theme = useColorMode<FlyonUITheme>(props);

const selectedTheme = computed({
    get: (): ThemeOption => useSelectedOption(themeOptions, theme.value).value ?? themeOptions.value[0],
    set: (newSelectedTheme: ThemeOption): void => {
        theme.value = newSelectedTheme.text;
    },
});

onMounted(() => {
    if (toValue(props.initialValue) in props.modes === false) {
        throw new Error(`The initial theme ${props.initialValue} is not available.`);
    }
});
</script>
