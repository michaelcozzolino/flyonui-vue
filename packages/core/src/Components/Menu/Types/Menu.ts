import type { IconType }    from '@/Components/Icon';
import type { To }          from '@/Components/Link';
import type { Orientable }  from '@/Shared/UseOrientation';
import type { Size }        from '@/Shared/UseSize';
import type { Disableable } from '@/Shared/UseState';

export interface MenuTextProps {
    hideText?:      boolean;
    textAsTooltip?: boolean;
}

export interface MenuProps extends MenuTextProps, Orientable {
    size?:      Size;
    isFlushed?: boolean;
}

export interface MenuItem extends Disableable {
    icon?: IconType;
    text:  string;
    to?:   To;
}
