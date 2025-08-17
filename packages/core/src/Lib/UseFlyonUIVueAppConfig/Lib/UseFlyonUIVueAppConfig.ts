import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import type { InjectionKey, Ref }          from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { inject, ref }                     from 'vue';

interface FlyonUIVueAppInjectedConfig {
    config:      Ref<FlyonUIVueAppDefaultConfig>;
    resetConfig: () => void;
}

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<FlyonUIVueAppInjectedConfig> = Symbol('Create FlyonUI Vue App');

const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

export function useFlyonUIVueAppConfig(): FlyonUIVueAppInjectedConfig {
    const defaultValue: FlyonUIVueAppInjectedConfig = {
        config,
        resetConfig: () => {
            config.value = { ...flyonUIVueAppDefaultConfig };
        },
    };

    return inject(
        useFlyonUIVueAppConfigInjectionKey,
        defaultValue,
    );
}
