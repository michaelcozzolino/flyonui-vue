import type { WithIcon, WithTo }            from '@/Components';
import type { Orientable }                  from '@/Shared/UseOrientation';
import type { Sizable }                     from '@/Shared/UseSize';
import type { Disableable }                 from '@/Shared/UseState';
import type { Flushable, WithRequiredText } from '@/Shared/Utils/Types/Props';

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
