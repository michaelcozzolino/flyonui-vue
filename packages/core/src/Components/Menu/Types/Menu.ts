import type { IconType }   from '@/Components/Icon/Types/Icon';
import type { To }         from '@/Components/Link';
import type { IsDisabled } from '@/Shared/Types';
import type { Orientable } from '@/Shared/UseOrientation';
import type { Size }       from '@/Shared/UseSize/Types';

export interface MenuTextProps {
    hideText?:      boolean;
    textAsTooltip?: boolean;
}

export interface MenuProps extends MenuTextProps, Orientable {
    size?:      Size;
    isFlushed?: boolean;
}

export interface MenuItem extends IsDisabled {
    icon?: IconType;
    text:  string;
    to?:   To;
}
