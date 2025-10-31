import type { ComputedRef, InjectionKey } from 'vue';

export const isModalTransparentInjectionKey: InjectionKey<ComputedRef<boolean>> = Symbol('isModalTransparentInjectionKey');
