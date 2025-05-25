import type {
    ConfigurableHelperText,
    PositionableHelperText,
    PositionableHelperTextComponentName,
}                                                  from '@/Components/HelperText/Internal';
import type { FlyonUIVueAppDefaultConfig }         from '@/Shared/UseFlyonUIVueAppConfig';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { computed, toValue }                       from 'vue';

export function usePositionableHelperText(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<PositionableHelperTextComponentName>,
    helperText: MaybeRefOrGetter<ConfigurableHelperText | undefined>,
): ComputedRef<PositionableHelperText | undefined> {
    return computed((): PositionableHelperText | undefined => {
        const configurableHelperText = toValue(helperText);

        if (configurableHelperText === undefined) {
            return undefined;
        }

        if (typeof configurableHelperText === 'string') {
            const [position, globalPosition] = [
                config.value.components?.[toValue(componentName)]?.horizontalPosition?.helperText,
                config.value.global.horizontalPosition.helperText,
            ];

            return {
                text:     configurableHelperText,
                position: position ?? globalPosition,
            };
        }

        return configurableHelperText;
    });
}
