import type { InjectionKey } from 'vue';

// The switch uses a checkbox under the hood
export const isCheckableInGroupInjectionKey: InjectionKey<boolean> = Symbol('isCheckableInGroupInjectionKey');
export const isSwitchInjectionKey: InjectionKey<boolean>           = Symbol('isSwitch');
