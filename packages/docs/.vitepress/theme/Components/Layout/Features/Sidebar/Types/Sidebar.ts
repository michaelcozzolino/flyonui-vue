import type { BadgeProps, Id, MenuItem  } from 'flyonui-vue';

export type SidebarBadge = BadgeProps & { text: string };

export interface SidebarItem extends Id, MenuItem {
    badge?:   SidebarBadge;
    children: SidebarItem[];
}
