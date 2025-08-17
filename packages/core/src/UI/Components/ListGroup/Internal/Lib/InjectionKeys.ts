import type { Orientation }               from '@/Lib';
import type { ComputedRef, InjectionKey } from 'vue';

export const listGroupOrientationInjectionKey: InjectionKey<ComputedRef<Orientation>> = Symbol('listGroupOrientation');
