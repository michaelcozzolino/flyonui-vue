import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import type { App, FunctionPlugin }                             from 'vue';
import { useFlyonUIVueAppConfigInjectionKey }                   from '@/Shared/UseFlyonUIVueAppConfig';
import { useStorage }                                           from '@vueuse/core';
import deepMerge                                                from 'deepmerge';

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

    const initialConfig = { global, components };

    const config = useStorage<FlyonUIVueAppDefaultConfig>(
        'flyonui-vue-config',
        initialConfig,
        localStorage,
        { mergeDefaults: true },
    );

    const resetConfig = (): void => {
        config.value = initialConfig;
    };

    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        { config, resetConfig },
    );
};
