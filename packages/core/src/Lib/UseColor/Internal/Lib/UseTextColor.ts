import type { Color, ColorableTextComponentName, FlyonUIVueAppDefaultConfig } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter, Ref }                            from 'vue';
import { useColor }                                                           from '@/Lib/UseColor/Internal';
import { isDefined }                                                          from '@/Lib/Utils/Internal';
import { computed }                                                           from 'vue';

export function useTextColor(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ColorableTextComponentName>,
    color: MaybeRefOrGetter<Color | undefined>,
): ComputedRef<string> {
    return computed((): string => {
        return isDefined(color) ? useColor(config, componentName, color).value : '';
    });
}
