import type { InjectionKey }                  from 'vue';
import type { FlyonUIVueAppInjectionContext } from '@/Lib';

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<FlyonUIVueAppInjectionContext> = Symbol('Create FlyonUI Vue App');
