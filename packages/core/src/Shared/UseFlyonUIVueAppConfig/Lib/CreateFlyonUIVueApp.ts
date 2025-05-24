import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import type { App, FunctionPlugin }                             from 'vue';
import { useFlyonUIVueAppConfigInjectionKey }                   from '@/Shared/UseFlyonUIVueAppConfig';
import deepMerge                                                from 'deepmerge';
import { ref }                                                  from 'vue';

export const flyonUIVueAppDefaultConfig: FlyonUIVueAppDefaultConfig = {
    global: {
        color:              'neutral',
        // textColor:          undefined,
        direction:          'ltr',
        horizontalPosition: 'left',
        labelType:          'text',
        orientation:        'horizontal',
        preset:             'solid',
        shape:              'rounded',
        size:               'medium',
    },
};

export const createFlyonUIVueApp: FunctionPlugin<FlyonUIVueAppConfig> = (app: App, config: FlyonUIVueAppConfig) => {
    const global     = deepMerge(flyonUIVueAppDefaultConfig.global, config.global ?? {});
    const components = deepMerge(flyonUIVueAppDefaultConfig.components ?? {}, config.components ?? {});

    app.provide(
        useFlyonUIVueAppConfigInjectionKey,
        ref<FlyonUIVueAppDefaultConfig>({ global, components }),
    );
};
