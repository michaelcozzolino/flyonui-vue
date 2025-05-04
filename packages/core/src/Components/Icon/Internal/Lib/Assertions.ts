import type { PositionableIcon } from '@/Components/Icon';
import { hasOwn, isObject }      from '@vueuse/core';

export function isPositionableIcon(icon: unknown): icon is PositionableIcon {
    return isObject(icon)
        && (
            hasOwn<PositionableIcon, keyof PositionableIcon>(icon, 'left')
            || hasOwn<PositionableIcon, keyof PositionableIcon>(icon, 'right')
        );
}
