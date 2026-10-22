import type { MaybeRefOrGetter } from 'vue';
import type { PositionableIcon } from '@/UI/Customization';
import {  toValue }              from 'vue';

export function useHasPositionableIcon(icon: MaybeRefOrGetter<PositionableIcon | undefined>): boolean {
    const positionableIcon = toValue(icon);

    return positionableIcon?.left !== undefined || positionableIcon?.right !== undefined;
}
