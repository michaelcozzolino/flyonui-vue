import type { ComputedRef, InjectionKey } from 'vue';

export const isLabelUsedAsSwitchIconInjectionKey: InjectionKey<ComputedRef<boolean>> = Symbol('isLabelUsedAsSwitchIcon');
