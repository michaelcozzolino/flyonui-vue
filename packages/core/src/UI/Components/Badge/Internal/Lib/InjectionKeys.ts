import type { ComputedRef, InjectionKey } from 'vue';

export const isInDismissibleBadgeInjectionKey: InjectionKey<ComputedRef<boolean>> = Symbol('isInDismissibleBadge');
