import type { ComputedRef, InjectionKey } from 'vue';
import type { Orientation }               from '@/Lib';

export const listGroupOrientationInjectionKey: InjectionKey<ComputedRef<Orientation>> = Symbol('listGroupOrientation');
