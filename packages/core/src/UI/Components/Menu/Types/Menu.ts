import type { Disableable, Orientable, Sizable  } from '@/Lib';
import type { Flushable, WithRequiredText }       from '@/Types';
import type { CustomNavigatable, WithTo }         from '@/UI/Content';
import type { WithIcon }                          from '@/UI/Customization';

export interface MenuTextProps {
    /** If true, the menu item's text will be hidden */
    hideText?: boolean;

    /** If true, the menu item will be shown as a tooltip on hover */
    textAsTooltip?: boolean;
}

export type MenuProps = Flushable
    & MenuTextProps
    & Orientable
    & Sizable;

export type MenuItem = Disableable
    & WithIcon
    & WithRequiredText
    & WithTo;

export interface MenuItemProps extends CustomNavigatable {
    /** The props of an item of the menu */
    item: MenuItem;
}
