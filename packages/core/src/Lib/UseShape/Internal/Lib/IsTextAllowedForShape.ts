import type { FlyonUIVueAppDefaultConfig, Shape, ShapeableComponentName } from '@/Lib';
import type { MaybeRefOrGetter }                                          from 'vue';
import { useFlyonUIVueAppConfigProperty }                                 from '@/Lib/UseFlyonUIVueAppConfig/Internal';

export function isTextAllowedForShape(
    config: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ShapeableComponentName>,
    shape: MaybeRefOrGetter<Shape | undefined>,
): shape is MaybeRefOrGetter<'rounded' | 'pilled'> {
    const _shape = useFlyonUIVueAppConfigProperty(config, componentName, 'shape', shape).value;

    return (['circle', 'square'] as Shape[]).includes(_shape) === false;
}
