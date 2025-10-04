import type { BadgeProps, MenuItem  } from 'flyonui-vue';

export type SidebarBadge = BadgeProps & { text: string };

export interface SidebarItem extends MenuItem {
    badge?:   SidebarBadge;
    children: SidebarItem[];
}
