import type { BadgeProps, Id, MenuItem  } from 'flyonui-vue';

export interface SidebarItem extends Id, MenuItem {
    badge?:   BadgeProps & { text: string };
    children: SidebarItem[];
}
