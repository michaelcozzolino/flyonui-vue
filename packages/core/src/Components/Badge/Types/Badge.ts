import type { PositionableIcon }           from '@/Components/Icon/Types/Icon';
import type { Color, Preset, Shape, Size } from '@/Shared/Types/Variants';

export interface BadgeProps {
    color?:         Color;
    preset?:        Preset;
    shape?:         Shape;
    size?:          Size;
    icon?:          PositionableIcon;
    isDismissible?: boolean;
}
