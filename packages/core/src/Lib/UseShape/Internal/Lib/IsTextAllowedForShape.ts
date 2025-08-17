import type { FlyonUIVueAppDefaultConfig, Shape, ShapeableComponentName  } from '@/Lib';
import type { MaybeRefOrGetter }                                           from 'vue';
import { getShape }                                                        from '@/Lib/UseShape/Internal';

export function isTextAllowedForShape(
    config: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ShapeableComponentName>,
    shape: MaybeRefOrGetter<Shape | undefined>,
): shape is MaybeRefOrGetter<'rounded' | 'pilled'> {
    const _shape = getShape(config, componentName, shape).value;

    return _shape !== 'circle' && _shape !== 'square';
}
