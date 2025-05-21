import type { FlyonUIVueAppDefaultConfig }         from '@/Configuration/CreateFlyonUIVueApp';
import type { Shape, ShapeableComponentName }      from '@/Shared/UseShape';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { useElementClass }                         from '@/Shared/UseClass/Internal';
import { computed, toValue }                       from 'vue';

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
                circle:  'rounded-full size-6 p-0 ',
                pilled:  'rounded-full',
                square:  'size-6 p-0',
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
        },
        getShape(config, componentName, shape),
    );
}
