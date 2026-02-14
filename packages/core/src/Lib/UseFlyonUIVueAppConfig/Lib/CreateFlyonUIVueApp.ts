import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig } from '@/Lib';
import type {
    TextDirection,
}                                                               from '@/Types';
import type { App, FunctionPlugin }       from 'vue';
import {
    flyonUIVueAppConfigLocalStorageKey,
    resetFlyonUIVueAppConfig,
    useFlyonUIVueAppConfigInjectionKey,
}                                                               from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import {
    useLocalStorage,
}                                                               from '@vueuse/core';
import deepMerge from 'deepmerge';
import {
    useHead,
}                                                               from 'unhead';
import {
    createHead,
}                                                               from 'unhead/client';
import {
    getActiveHead,
}                                                               from 'unhead/legacy';
import { watch } from 'vue';

export const flyonUIVueAppDefaultConfig: FlyonUIVueAppDefaultConfig = {
    global: {
        color:              'neutral',
        textDirection:      'ltr',
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
            mergeDefaults: (storageValue: FlyonUIVueAppDefaultConfig, defaults: FlyonUIVueAppDefaultConfig): FlyonUIVueAppDefaultConfig => {
                return deepMerge(defaults, storageValue);
            },
        },
    );

    watch(() => config.value.global.textDirection, (newDirection: TextDirection) => {
        useHead(getActiveHead() ?? createHead(), {
            htmlAttrs: { dir: newDirection },
        });
    }, { immediate: true });

    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        { config, resetConfig: () => resetFlyonUIVueAppConfig(config, initialConfig) },
    );
};
