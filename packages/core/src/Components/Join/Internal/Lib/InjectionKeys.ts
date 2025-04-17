import type { InjectionKey } from 'vue';

// todo: every symbol should be using __DEV__
export const isInJoinInjectionKey: InjectionKey<boolean> = Symbol('isInJoin');
