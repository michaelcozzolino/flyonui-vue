import type { PositionableIcon }                   from '@/Components/Icon/Types/Icon';
import type { IsResponsive, WithGlass }            from '@/Shared/Types/Props';
import type { Color, Layout, Preset, Shape, Size } from '@/Shared/Types/Variants';
import type { RouteRecordRaw }                     from 'vue-router';

export interface ButtonProps extends IsResponsive, WithGlass {
    color?:       Color;
    to?:          RouteRecordRaw;
    icon?:        PositionableIcon;
    shape?:       Shape;
    size?:        Size;
    layout?:      Layout;
    isActive?:    boolean;
    isDisabled?:  boolean;
    noAnimation?: boolean;
    preset?:      Preset;
}
