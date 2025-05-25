import type { Size }               from '@/Shared/UseSize';
import type { HorizontalPosition } from '@/Shared/Utils';
import type { ComponentName }      from '@/Shared/Utils/Internal';
import type { IconifyIcon }        from '@iconify/vue';
import type { Component }          from 'vue';

export type PositionableIconComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton' | 'FoInputText' | 'FoTextarea'>;

// The Component type can be used if you have a custom icon that is not an iconify one, such as a custom svg or component.
export type IconType = IconifyIcon | string | Component;

export type PositionableIcon = Partial<Record<HorizontalPosition, IconType>>;

export type ConfigurableIcon = IconType | PositionableIcon;

export interface IconProps {
    icon:  IconType;
    /**
     * todo: must be improved, as it is too small
     * The size of the icon that will be applied only to an iconify icon.
     * If the icon is a custom component you should define the size in that component itself.
     */
    size?: Size;
}

export interface WithConfigurableIcon {
    icon?: ConfigurableIcon;
}
