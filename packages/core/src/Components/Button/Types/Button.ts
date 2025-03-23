import type { PositionableIcon }                    from '@/Components/Icon/Types/Icon';
import type { IsDisabled, IsResponsive, WithGlass } from '@/Shared/Types/Props';
import type { Color, Layout, Preset, Shape, Size }  from '@/Shared/Types/Variants';
import type { RouteRecordRaw }                      from 'vue-router';

export interface ButtonProps extends IsDisabled, IsResponsive, WithGlass {
    color?:       Color;
    to?:          RouteRecordRaw;
    icon?:        PositionableIcon;
    shape?:       Shape;
    size?:        Size;
    layout?:      Layout;
    isActive?:    boolean;
    noAnimation?: boolean;
    preset?:      Preset;
}
