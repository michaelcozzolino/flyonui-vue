import type { Orientation }               from '@/Shared/Types/Variants';
import type { ComputedRef, InjectionKey } from 'vue';

export const listGroupOrientationInjectionKey: InjectionKey<ComputedRef<Orientation>> = Symbol('listGroupOrientation');
