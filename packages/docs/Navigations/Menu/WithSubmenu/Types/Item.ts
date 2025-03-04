import type { Id, MenuItem } from 'flyonui-vue';

export interface Item extends Id, MenuItem {
    children: Item[];
}
