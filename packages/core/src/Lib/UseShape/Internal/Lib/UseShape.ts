import type { FlyonUIVueAppDefaultConfig, Shape, ShapeableComponentName } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter, Ref }                        from 'vue';
import { useComponentClass }                                              from '@/Lib/UseClass/Internal';
import { useFlyonUIVueAppConfigProperty }                                 from '@/Lib/UseFlyonUIVueAppConfig/Internal';

export function useShape(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ShapeableComponentName>,
    shape: MaybeRefOrGetter<Shape | undefined>,
): ComputedRef<string> {
    return useComponentClass<ShapeableComponentName, Shape>(
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
        useFlyonUIVueAppConfigProperty(config, componentName, 'shape', shape),
    );
}
