<template>
    <FoSelect v-model="selectedTheme"
              :label="{ text: 'Theme', type: 'floating' }"
              :options="themeOptions"
              size="large"
    />
</template>

<script setup lang="ts">
import type { FlyonUITheme }                      from '@/components/ThemeController/Lib/ThemeController';
import FoSelect, { type Option }                  from '@/components/Select/UI/FoSelect.vue';
import { useColorMode, type UseColorModeOptions } from '@vueuse/core';
import { computed, onMounted, toValue }           from 'vue';

// todo: many thing props could be ref and this should not be allowed through props
const props = withDefaults(defineProps<UseColorModeOptions<FlyonUITheme>>(), {
    initialValue: 'dark',
    attribute:    'data-theme',
    modes() {
        return {
            light:   'light',
            dark:    'dark',
            gourmet: 'gourmet',
            luxury:  'luxury',
            soft:    'soft',
        };
    },
});

interface ThemeOption extends Option {
    text: FlyonUITheme;
}

const themeOptions = computed((): ThemeOption[] => {
    let id = 0;

    return Object.values(toValue(props.modes)).map((theme) => {
        return { id: ++id, text: theme };
    });
});

const theme = useColorMode<FlyonUITheme>(props);

const selectedTheme = computed({
    get: (): ThemeOption => themeOptions.value.find(t => t.text === theme.value) ?? themeOptions.value[0],
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
