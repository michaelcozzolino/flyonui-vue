import type { Direction }                                       from '@/Shared';
import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import type { App, FunctionPlugin }                             from 'vue';
import { useFlyonUIVueAppConfigInjectionKey }                   from '@/Shared/UseFlyonUIVueAppConfig';
import { useLocalStorage }                                      from '@vueuse/core';
import { createHead, useHead }                                  from '@vueuse/head';
import deepMerge                                                from 'deepmerge';
import { watch }                                                from 'vue';

export const flyonUIVueAppDefaultConfig: FlyonUIVueAppDefaultConfig = {
    global: {
        color:              'neutral',
        // textColor:          undefined,
        direction:          'ltr',
        horizontalPosition: {
            icon:       'left',
            helperText: 'left',
        },
        labelType:   'text',
        orientation: 'horizontal',
        preset:      'solid',
        shape:       'rounded',
        size:        'medium',
    },
};

export const createFlyonUIVueApp: FunctionPlugin<FlyonUIVueAppConfig> = (app: App, userConfig: FlyonUIVueAppConfig) => {
    const global     = deepMerge(flyonUIVueAppDefaultConfig.global, userConfig.global ?? {});
    const components = deepMerge(flyonUIVueAppDefaultConfig.components ?? {}, userConfig.components ?? {});

    // todo: remove when this will be merged https://github.com/vueuse/vueuse/pull/4784
    const initialConfig = (): FlyonUIVueAppDefaultConfig => structuredClone({ global, components });

    const config = useLocalStorage<FlyonUIVueAppDefaultConfig>(
        'flyonui-vue-config',
        initialConfig,
        { mergeDefaults: true },
    );

    const resetConfig = (): void => {
        config.value = initialConfig();
    };

    watch(() => config.value.global.direction, (newDirection: Direction) => {
        useHead({
            htmlAttrs: { dir: newDirection },
        });
    }, { immediate: true });

    app.use(createHead());
    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        { config, resetConfig },
    );
};
