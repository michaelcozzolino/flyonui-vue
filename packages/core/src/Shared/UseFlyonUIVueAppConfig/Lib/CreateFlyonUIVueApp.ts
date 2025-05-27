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

export const createFlyonUIVueApp: FunctionPlugin<FlyonUIVueAppConfig> = (app: App, config: FlyonUIVueAppConfig) => {
    const global     = deepMerge(flyonUIVueAppDefaultConfig.global, config.global ?? {});
    const components = deepMerge(flyonUIVueAppDefaultConfig.components ?? {}, config.components ?? {});

    const data = useStorage<FlyonUIVueAppDefaultConfig>(
        'flyonui-vue-config',
        { global, components },
        localStorage,
        { mergeDefaults: true },
    );

    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        data,
    );
};
