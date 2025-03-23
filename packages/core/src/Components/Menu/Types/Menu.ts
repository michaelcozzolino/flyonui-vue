import type { IconType }                      from '@/Components/Icon/Types/Icon';
import type { To }                            from '@/Components/Link';
import type { IsDisabled, Orientation, Size } from '@/Shared/Types';

export interface MenuTextProps {
    hideText?:      boolean;
    textAsTooltip?: boolean;
}

export interface MenuProps extends MenuTextProps {
    orientation?: Orientation;
    size?:        Size;
    isFlushed?:   boolean;
}

export interface MenuItem extends IsDisabled {
    icon?: IconType;
    text:  string;
    to?:   To;
}
