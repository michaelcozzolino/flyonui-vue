import type { FlyonUIVueAppDefaultConfig, FlyonUIVueAppInjectionContext } from '@/Lib';
import { flyonUIVueAppDefaultConfig  }                                    from '@/Lib';
import { resetFlyonUIVueAppConfig, useFlyonUIVueAppConfigInjectionKey }   from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { inject, ref }                                                    from 'vue';

export function useFlyonUIVueAppConfig(): FlyonUIVueAppInjectionContext {
    /**
     * This fallback config allows to work with default values on every component by taking the predefined config without
     * using the plugin, if there is the need of the config manipulation, the plugin's usage is required.
     */
    const fallbackConfig = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

    const fallbackInjection = (): FlyonUIVueAppInjectionContext => ({
        config:      fallbackConfig,
        resetConfig: (): void => resetFlyonUIVueAppConfig(fallbackConfig, { ...flyonUIVueAppDefaultConfig }),
    });

    return inject(
        useFlyonUIVueAppConfigInjectionKey,
        fallbackInjection,
        true,
    );
}
