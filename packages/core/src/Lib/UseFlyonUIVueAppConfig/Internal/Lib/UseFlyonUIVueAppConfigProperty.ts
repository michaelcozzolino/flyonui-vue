import type {
    ConfigurableComponentName,
    ConfigurableProperty,
    FlyonUIVueAppComponentsConfig,
    FlyonUIVueAppDefaultConfig,
    FlyonUIVueAppGlobalConfig,
} from '@/Lib';

import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useFlyonUIVueAppConfigProperty<
    T extends ConfigurableComponentName,
    K extends ConfigurableProperty<T>,
>(
    config: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<T>,
    property: K,
    value: MaybeRefOrGetter<FlyonUIVueAppGlobalConfig[K] | FlyonUIVueAppComponentsConfig[T][K] | undefined>,
): ComputedRef<FlyonUIVueAppGlobalConfig[K] | FlyonUIVueAppComponentsConfig[T][K] & (object | null)> {
    return computed(() => {
        const { components, global } = toValue(config);

        return components?.[toValue(componentName)]?.[property] ?? toValue(value) ?? global[property];
    });
}
