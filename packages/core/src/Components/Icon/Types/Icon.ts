import type { Size }               from '@/Shared/UseSize';
import type { HorizontalPosition } from '@/Shared/Utils';
import type { IconifyIcon }        from '@iconify/vue';
import type { Component }          from 'vue';

// The Component type can be used if you have a custom icon that is not an iconify one, such as a custom svg or component.
export type IconType = IconifyIcon | string | Component;

export type PositionableIcon = Partial<Record<HorizontalPosition, IconType>>;

export interface IconProps {
    icon:  IconType;
    /**
     * The size of the icon that will be applied only to an iconify icon.
     * If the icon is a custom component you should define the size in that component itself.
     */
    size?: Size;
}
