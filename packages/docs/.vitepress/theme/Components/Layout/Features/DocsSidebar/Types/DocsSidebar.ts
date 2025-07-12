import type { Id, MenuItem } from 'flyonui-vue';

export interface DocsSidebarItem extends Id, MenuItem {
    children: DocsSidebarItem[];
}
