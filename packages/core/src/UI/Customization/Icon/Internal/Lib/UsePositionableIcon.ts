import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import type {
    ConfigurableIcon,
    PositionableIcon,
    PositionableIconComponentName,
}                                                  from '@/UI/Customization/Icon';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { hasOwn, isObject }                        from '@vueuse/core';
import { computed, toValue }                       from 'vue';

export function usePositionableIcon(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<PositionableIconComponentName>,
    icon: MaybeRefOrGetter<ConfigurableIcon | undefined>,
): ComputedRef<PositionableIcon | undefined> {
    return computed((): PositionableIcon | undefined => {
        const configurableIcon = toValue(icon);

        if (configurableIcon === undefined) {
            return undefined;
        }

        if (isPositionableIcon(configurableIcon)) {
            return configurableIcon;
        }

        const [position, globalPosition] = [
            config.value.components[toValue(componentName)]?.horizontalPosition?.icon,
            config.value.global.horizontalPosition.icon,
        ];

        return { [position ?? globalPosition]: configurableIcon };
    });
}

function isPositionableIcon(icon: unknown): icon is PositionableIcon {
    return isObject(icon)
        && (
            hasOwn<PositionableIcon, keyof PositionableIcon>(icon, 'left')
            || hasOwn<PositionableIcon, keyof PositionableIcon>(icon, 'right')
        );
}
