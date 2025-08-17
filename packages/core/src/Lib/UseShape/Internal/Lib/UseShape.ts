import type { FlyonUIVueAppDefaultConfig, Shape, ShapeableComponentName  } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter, Ref }                         from 'vue';
import { useElementClass }                                                 from '@/Lib/UseClass/Internal';
import { computed, toValue }                                               from 'vue';

export function getShape(
    config: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ShapeableComponentName>,
    shape: MaybeRefOrGetter<Shape | undefined>,
): ComputedRef<Shape> {
    return computed(() => {
        const { components, global } = toValue(config);

        return components?.[toValue(componentName)]?.shape ?? toValue(shape) ?? global.shape;
    });
}

export function useShape(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ShapeableComponentName>,
    shape: MaybeRefOrGetter<Shape | undefined>,
): ComputedRef<string> {
    return useElementClass<ShapeableComponentName, Shape>(
        componentName,
        {
            FoBadge: {
                rounded: '',
                circle:  'rounded-full',
                pilled:  'rounded-full',
                square:  '',
            },
            FoButton: {
                rounded: '',
                circle:  'btn-circle',
                pilled:  'rounded-full',
                square:  'btn-square',
            },
            FoInputText: {
                rounded: '',
                circle:  '',
                pilled:  'rounded-full',
                square:  '',
            },
            FoSelect: {
                rounded: '',
                circle:  '',
                pilled:  'rounded-full',
                square:  '',
            },
        },
        getShape(config, componentName, shape),
    );
}
