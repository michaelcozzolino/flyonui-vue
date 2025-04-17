<template>
    <FoSelect v-model="selectedTheme"
              :label="{ text: 'Theme', type: 'floating' }"
              :options="themeOptions"
              size="large"
    />
</template>

<script setup lang="ts">
import type { SelectOption } from '@/Components/Select';

import type { FlyonUITheme }            from '@/Components/ThemeController/Lib/ThemeController';
import type { UseColorModeOptions }     from '@vueuse/core';
import { FoSelect, useSelectedOption }  from '@/Components/Select';
import { useColorMode }                 from '@vueuse/core';
import { computed, onMounted, toValue } from 'vue';

// todo: many thing props could be ref and this should not be allowed through props
const props = withDefaults(defineProps<UseColorModeOptions<FlyonUITheme>>(), {
    initialValue: 'dark',
    attribute:    'data-theme',
    modes(): Record<FlyonUITheme, FlyonUITheme> {
        return {
            light:     'light',
            dark:      'dark',
            gourmet:   'gourmet',
            corporate: 'corporate',
            luxury:    'luxury',
            soft:      'soft',
        };
    },
});

type ThemeOption = SelectOption<FlyonUITheme>;

const themeOptions = computed((): ThemeOption[] => {
    const options: ThemeOption[] = [];

    for (const theme of Object.values(props.modes)) {
        if (theme !== undefined) {
            options.push({ id: theme, text: theme });
        }
    }

    return options;
});

const theme = useColorMode<FlyonUITheme>(props);

const selectedTheme = computed({
    get: (): ThemeOption => useSelectedOption(themeOptions, theme.value).value ?? themeOptions.value[0],
    set: (newSelectedTheme: ThemeOption): void => {
        theme.value = newSelectedTheme.text;
    },
});

onMounted(() => {
    if (toValue(props.initialValue) in props.modes === false) {
        throw new Error('The initial theme is not available');
    }
});
</script>
