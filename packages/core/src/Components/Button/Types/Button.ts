import type { PositionableIcon } from '@/Components/Icon/Types/Icon';
import type { IsDisabled }       from '@/Shared/Types/Props';
import type {  Layout }          from '@/Shared/Types/Variants';
import type { Color }            from '@/Shared/UseColor';
import type { WithGlass }        from '@/Shared/UseGlass';
import type { Preset }           from '@/Shared/UsePreset';
import type { Responsive }       from '@/Shared/UseResponsitivity';
import type { Shape }            from '@/Shared/UseShape';
import type { SizeWithout2XL }   from '@/Shared/UseSize';
import type { RouteRecordRaw }   from 'vue-router';

export interface ButtonProps extends IsDisabled, Responsive, WithGlass {
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
