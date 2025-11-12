import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig } from '@/Lib';
import type { Direction }                                       from '@/Types';
import type { App, FunctionPlugin }                             from 'vue';
import {
    flyonUIVueAppConfigLocalStorageKey,
    useFlyonUIVueAppConfigInjectionKey,
}                                                               from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { useLocalStorage } from '@vueuse/core';
import deepMerge           from 'deepmerge';
import { useHead }         from 'unhead';
import { createHead }      from 'unhead/client';
import { getActiveHead }   from 'unhead/legacy';
import { watch }           from 'vue';

export const flyonUIVueAppDefaultConfig: FlyonUIVueAppDefaultConfig = {
    global: {
        color:              'neutral',
        direction:          'ltr',
        horizontalPosition: {
            icon:       'left',
            helperText: 'left',
        },
        labelType: 'text',
        preset:    'solid',
        shape:     'rounded',
        size:      'medium',
    },
    components: {},
};

export const createFlyonUIVueApp: FunctionPlugin<FlyonUIVueAppConfig> = (app: App, userConfig: FlyonUIVueAppConfig): void => {
    const global     = deepMerge(flyonUIVueAppDefaultConfig.global, userConfig.global ?? {});
    const components = deepMerge(flyonUIVueAppDefaultConfig.components, userConfig.components ?? {});

    // todo: remove when this will be merged https://github.com/vueuse/vueuse/pull/4784
    const initialConfig = (): FlyonUIVueAppDefaultConfig => structuredClone({ global, components });

    const config = useLocalStorage<FlyonUIVueAppDefaultConfig>(
        flyonUIVueAppConfigLocalStorageKey,
        initialConfig,
        {
            deep:          true,
            writeDefaults: true,
            mergeDefaults: (storageValue, defaults): FlyonUIVueAppDefaultConfig => {
                return deepMerge(storageValue, defaults);
            },
        },
    );

    const resetConfig = (): void => {
        config.value = initialConfig();
    };

    watch(() => config.value.global.direction, (newDirection: Direction) => {
        useHead(getActiveHead() ?? createHead(), {
            htmlAttrs: { dir: newDirection },
        });
    }, { immediate: true });

    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        { config, resetConfig },
    );
};
