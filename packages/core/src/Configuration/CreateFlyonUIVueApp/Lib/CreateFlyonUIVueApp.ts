import type {
    FlyonUIVueAppConfig,
    FlyonUIVueAppDefaultConfig,
}                                                      from '@/Configuration/CreateFlyonUIVueApp/Types/CreateFlyonUIVueApp.ts';
import type { App, FunctionPlugin, InjectionKey, Ref } from 'vue';
import deepMerge                                       from 'deepmerge';
import { ref }                                         from 'vue';

export const flyonUIVueAppDefaultConfig: FlyonUIVueAppDefaultConfig = {
    global: {
        color:              'neutral',
        // textColor:          undefined,
        direction:          'ltr',
        horizontalPosition: 'left',
        labelType:          'text',
        orientation:        'horizontal',
        preset:             'default',
        shape:              'default',
        size:               'default',
    },
};

export const flyonUIVueAppConfigInjectionKey: InjectionKey<Ref<FlyonUIVueAppDefaultConfig>> = Symbol('Create FlyonUI Vue app');

export const createFlyonUIVueApp: FunctionPlugin<FlyonUIVueAppConfig> = (app: App, config: FlyonUIVueAppConfig) => {
    const global     = deepMerge(flyonUIVueAppDefaultConfig.global, config.global ?? {});
    const components = deepMerge(flyonUIVueAppDefaultConfig.components ?? {}, config.components ?? {});

    app.provide(
        flyonUIVueAppConfigInjectionKey,
        ref<FlyonUIVueAppDefaultConfig>({ global, components }),
    );
};
