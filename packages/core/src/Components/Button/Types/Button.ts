import type { PositionableIcon } from '@/Components/Icon';
import type { Color }            from '@/Shared/UseColor';
import type { WithGlass }        from '@/Shared/UseGlass';
import type { MaybeStringId }    from '@/Shared/UseIdentifiable';
import type { Preset }           from '@/Shared/UsePreset';
import type { Responsive }       from '@/Shared/UseResponsitivity';
import type { Shape }            from '@/Shared/UseShape';
import type { SizeWithout2XL }   from '@/Shared/UseSize';
import type { Disableable }      from '@/Shared/UseState';
import type { Default }          from '@/Shared/Utils';
import type { RouteRecordRaw }   from 'vue-router';

// todo: in case it is used by other components, just move it to shared
export type Layout = Default | 'wide' | 'block';

export interface ButtonProps extends MaybeStringId, Disableable, Responsive, WithGlass {
    color?:    Color;
    to?:       RouteRecordRaw;
    icon?:     PositionableIcon;
    shape?:    Shape;
    size?:     SizeWithout2XL;
    layout?:   Layout;
    isActive?: boolean;
    preset?:   Preset;
}

export type Social = 'Facebook' | 'Twitter' | 'Linkedin' | 'Github';

type SocialButtonPreset = Extract<Preset, 'solid' | 'soft' | 'outline'>;

export interface SocialButtonProps extends Omit<ButtonProps, 'preset'> {
    social:  Social;
    preset?: SocialButtonPreset;
}
