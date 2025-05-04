import type { PositionableIcon }    from '@/Components/Icon/Types/Icon';
import type { Preset, Shape, Size } from '@/Shared/Types/Variants';
import type { Color }               from '@/Shared/UseColor';

export interface BadgeProps {
    color?:         Color;
    preset?:        Preset;
    shape?:         Shape;
    size?:          Size;
    icon?:          PositionableIcon;
    isDismissible?: boolean;
}
