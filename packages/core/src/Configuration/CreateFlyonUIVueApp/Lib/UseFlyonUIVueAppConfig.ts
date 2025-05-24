import type { FlyonUIVueAppDefaultConfig }                             from '@/Configuration/CreateFlyonUIVueApp';
import type { Ref }                                                    from 'vue';
import { flyonUIVueAppConfigInjectionKey, flyonUIVueAppDefaultConfig } from '@/Configuration/CreateFlyonUIVueApp';
import { inject, ref }                                                 from 'vue';

export function useFlyonUIVueAppConfig(): Ref<FlyonUIVueAppDefaultConfig> {
    return inject(flyonUIVueAppConfigInjectionKey, ref({ ...flyonUIVueAppDefaultConfig }));
}
