import type { Orientation }               from '@/Shared/UseOrientation';
import type { ComputedRef, InjectionKey } from 'vue';

export const listGroupOrientationInjectionKey: InjectionKey<ComputedRef<Orientation>> = Symbol('listGroupOrientation');
