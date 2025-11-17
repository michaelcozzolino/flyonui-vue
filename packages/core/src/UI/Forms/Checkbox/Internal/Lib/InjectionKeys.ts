import type { ComputedRef, InjectionKey } from 'vue';

// The switch uses a checkbox under the hood
export const isCheckableInGroupInjectionKey: InjectionKey<boolean> = Symbol('isCheckableInGroupInjectionKey');

export const switchOptionsInjectionKey: InjectionKey<ComputedRef<{ labelAsIcon: boolean } | undefined>> = Symbol('switchOptions');
