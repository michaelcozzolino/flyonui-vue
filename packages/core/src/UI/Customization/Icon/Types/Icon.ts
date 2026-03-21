import type { ComponentName, IconSize  } from '@/Lib';
import type { HorizontalPosition }       from '@/Types/Utils';
import type { Component }                from 'vue';

export type PositionableIconComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton' | 'FoInputText' | 'FoSwitch' | 'FoTextarea'>;

export type IconType = string | Component;

export type Icon = string;

/**
 * This does not need to be IconType, because it is mainly used by components using FoIcon, such as FoButton, FoBadge
 * and these already have slots to enter custom content instead of the icon directly
 */
export type PositionableIcon = Partial<Record<HorizontalPosition, string>>;

export type ConfigurableIcon = string | PositionableIcon;

export interface Dimension2D {
    /** The icon's height */
    height: number;

    /** The icon's width */
    width: number;
}

export type CustomIconSize = IconSize | Dimension2D;

export interface IconifyIconProps extends WithRequiredIcon {
    /**
     * todo: bug this is not shown in the generated components api
     * The size of the icon that will be applied only to an iconify icon.
     * If the icon is a custom component you should define the size in that component itself.
     */
    size?: CustomIconSize;
}

export interface IconComponentProps {
    /** If a custom icon is needed, it can also be a custom svg or component. */
    icon: Component;
}

export type IconProps = IconifyIconProps | IconComponentProps;

export interface WithConfigurableIcon {
    /**
     * The icon's name or a left/right position followed by the icon's name, both positions can be used at the same time
     */
    icon?: ConfigurableIcon;
}

export interface WithIcon {
    /** The Iconify icon's name */
    icon?: Icon;
}

export type WithRequiredIcon = Required<WithIcon>;
