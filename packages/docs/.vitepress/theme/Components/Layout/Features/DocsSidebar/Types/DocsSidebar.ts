import type { Id, MenuItem } from 'flyonui-vue';

export interface DocsSidebarItem extends Id, MenuItem {
    children: DocsSidebarItem[];
    level:    number; // The level of the leaf in which it is contained in the tree
}
