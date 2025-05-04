import type { PositionableIcon }                       from '@/Components/Icon/Types/Icon';
import type { IsDisabled, IsResponsive, WithGlass }    from '@/Shared/Types/Props';
import type {  Layout, Preset, Shape, SizeWithout2XL } from '@/Shared/Types/Variants';
import type { Color }                                  from '@/Shared/UseColor';
import type { RouteRecordRaw }                         from 'vue-router';

export interface ButtonProps extends IsDisabled, IsResponsive, WithGlass {
    color?:    Color;
    to?:       RouteRecordRaw;
    icon?:     PositionableIcon;
    shape?:    Shape;
    size?:     SizeWithout2XL;
    layout?:   Layout;
    isActive?: boolean;
    preset?:   Preset;
}
