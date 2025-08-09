import type { WithConfigurableIcon } from '@/Components/Icon';
import type { Default }              from '@/Shared';
import type { Colorable }            from '@/Shared/UseColor';
import type { WithGlass }            from '@/Shared/UseGlass';
import type { MaybeStringId }        from '@/Shared/UseIdentifiable';
import type { Preset, Presettable }  from '@/Shared/UsePreset';
import type { Responsive }           from '@/Shared/UseResponsitivity';
import type { Shapeable }            from '@/Shared/UseShape';
import type { Sizable }              from '@/Shared/UseSize';
import type { Disableable }          from '@/Shared/UseState';
import type { RouteRecordRaw }       from 'vue-router';

// todo: in case it is used by other components, just move it to shared
export type Layout = Default | 'wide' | 'block';

export interface ButtonProps extends MaybeStringId,
    Colorable,
    Disableable,
    Presettable,
    Responsive,
    Shapeable,
    Sizable,
    WithGlass,
    WithConfigurableIcon {
    /** Navigation target route, when given the button will act as a link */
    to?: RouteRecordRaw;

    /** The button's layout */
    layout?: Layout;

    /** The button's active state */
    isActive?: boolean;
}

export type Social = 'Facebook' | 'Twitter' | 'Linkedin' | 'Github';
export type SocialButtonPreset = Extract<Preset, 'solid' | 'soft' | 'outline'>;

export interface SocialButtonProps extends Presettable<SocialButtonPreset> {
    /** The button's social platform */
    social: Social;
}
