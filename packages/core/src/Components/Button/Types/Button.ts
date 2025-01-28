import type { HorizontalIconProp }                           from '@/Components/Icon/Types/Icon';
import type { Color, HasGlass, Layout, Preset, Shape, Size } from '@/Shared/Types/Variants';
import type { RouteRecordRaw }                               from 'vue-router';

export interface ButtonProps extends HasGlass {
    color?:        Color;
    to?:           RouteRecordRaw;
    icon?:         HorizontalIconProp;
    shape?:        Shape;
    size?:         Size;
    layout?:       Layout;
    isResponsive?: boolean;
    isActive?:     boolean;
    isDisabled?:   boolean;
    noAnimation?:  boolean;
    preset?:       Preset;
}
