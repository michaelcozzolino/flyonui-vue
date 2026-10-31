import type { ComputedRef, InjectionKey } from 'vue';
import type { SwitchInjectedOptions }     from '@/UI/Forms/Checkbox/Internal';

// The switch uses a checkbox under the hood
export const isCheckableInGroupInjectionKey: InjectionKey<boolean> = Symbol('isCheckableInGroupInjectionKey');

export const switchOptionsInjectionKey: InjectionKey<ComputedRef<SwitchInjectedOptions | undefined>> = Symbol('switchOptions');
