import type { Identifiable, MenuItem } from 'flyonui-vue';

export interface Item extends Identifiable, MenuItem {
    children: Item[];
}
