import type { FlyonUIVueAppInjectionContext } from '@/Lib';
import type { InjectionKey }                  from 'vue';

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<FlyonUIVueAppInjectionContext> = Symbol('Create FlyonUI Vue App');
