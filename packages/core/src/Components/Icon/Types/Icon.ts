import type { IconifyIcon } from '@iconify/vue';
import type { Component }   from 'vue';

// The Component type can be used if you have a custom icon that is not an iconify one, such as a custom svg or component.
export type IconType = IconifyIcon | string | Component;

export interface HorizontalIconProp {
    left?:  IconType;
    right?: IconType;
}
