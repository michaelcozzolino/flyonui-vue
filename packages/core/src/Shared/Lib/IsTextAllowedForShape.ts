import type { Shape }            from '@/Shared/Types/Variants';
import type { MaybeRefOrGetter } from 'vue';
import { toValue }               from 'vue';

export function isTextAllowedForShape(shape: MaybeRefOrGetter<Shape>): shape is MaybeRefOrGetter<'default' | 'pilled'> {
    const _shape = toValue(shape);

    return _shape !== 'circle' && _shape !== 'square';
}
