import type { FlyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import type { InjectionKey, Ref }          from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Shared/UseFlyonUIVueAppConfig';
import { inject, ref }                     from 'vue';

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<Ref<FlyonUIVueAppDefaultConfig>> = Symbol('Create FlyonUI Vue App');

export function useFlyonUIVueAppConfig(): Ref<FlyonUIVueAppDefaultConfig> {
    return inject(useFlyonUIVueAppConfigInjectionKey, ref({ ...flyonUIVueAppDefaultConfig }));
}
