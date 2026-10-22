import type { ComputedRef, MaybeRefOrGetter, Ref }                                from 'vue';
import type { FlyonUIVueAppDefaultConfig, TextColor, TextColorableComponentName } from '@/Lib';
import { computed, toValue }                                                      from 'vue';
import { useColor }                                                               from '@/Lib/UseColor/Internal';

export function useTextColor(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<TextColorableComponentName>,
    color: MaybeRefOrGetter<TextColor | undefined>,
): ComputedRef<string> {
    return computed((): string => {
        const c = toValue(color);

        if (c === 'base') {
            return 'text-base-content';
        }

        return useColor(config, componentName, c).value;
    });
}
