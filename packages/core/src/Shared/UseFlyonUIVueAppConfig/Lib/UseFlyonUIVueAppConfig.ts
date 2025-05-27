import type { FlyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import type { InjectionKey, Ref }          from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Shared/UseFlyonUIVueAppConfig';
import { inject, ref }                     from 'vue';

interface FlyonUIVueAppInjectedConfig {
    config:      Ref<FlyonUIVueAppDefaultConfig>;
    resetConfig: () => void;
}

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<FlyonUIVueAppInjectedConfig> = Symbol('Create FlyonUI Vue App');

export function useFlyonUIVueAppConfig(): FlyonUIVueAppInjectedConfig {
    const defaultConfig = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

    const defaultValue: FlyonUIVueAppInjectedConfig = {
        config:      defaultConfig,
        resetConfig: () => defaultConfig.value = flyonUIVueAppDefaultConfig,
    };

    return inject(
        useFlyonUIVueAppConfigInjectionKey,
        defaultValue,
    );
}
