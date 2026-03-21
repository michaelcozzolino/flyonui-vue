import type { BadgeProps, MenuItem  } from 'flyonui-vue';

export type SidebarBadge = BadgeProps & { text: string };

export interface ParentSidebarItem extends SidebarItem {
    isCollapsed: boolean;
}

export interface SidebarItem extends MenuItem {
    readonly badge?:   SidebarBadge;
    readonly children: SidebarItem[];
}
