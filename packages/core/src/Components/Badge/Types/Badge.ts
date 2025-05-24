import type { PositionableIcon } from '@/Components/Icon';
import type { Color }            from '@/Shared/UseColor';
import type { Preset }           from '@/Shared/UsePreset';
import type { Shape }            from '@/Shared/UseShape';
import type { Size }             from '@/Shared/UseSize';

export interface BadgeProps {
    color?:         Color;
    preset?:        Preset;
    shape?:         Shape;
    size?:          Size;
    icon?:          PositionableIcon;
    isDismissible?: boolean;
}
