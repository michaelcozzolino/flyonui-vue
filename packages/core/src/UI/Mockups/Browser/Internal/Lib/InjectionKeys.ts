import type { ComputedRef, InjectionKey } from 'vue';

export const isBorderedBrowserInjectionKey: InjectionKey<ComputedRef<boolean>> = Symbol('isBorderedBrowserInjectionKey');
