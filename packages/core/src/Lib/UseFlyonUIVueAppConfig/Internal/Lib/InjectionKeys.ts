import type { FlyonUIVueAppInjection } from '@/Lib';
import type { InjectionKey }           from 'vue';

export const useFlyonUIVueAppConfigInjectionKey: InjectionKey<FlyonUIVueAppInjection> = Symbol('Create FlyonUI Vue App');
