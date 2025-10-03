import type {
    Colorable,
    Disableable,
    MaybeStringId,
    Preset,
    Presettable,
    Responsive,
    Shape,
    Shapeable,
    Sizable,
    WithGlass,
} from '@/Lib';
import type { Default, HorizontalPosition } from '@/Types';
import type { LoadingProps }                from '@/UI/Components';
import type { WithTo }                      from '@/UI/Content';
import type { WithConfigurableIcon }        from '@/UI/Customization/Icon';

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
    WithConfigurableIcon,
    WithTo {
    /** The button's layout */
    layout?: Layout;

    /** The button's active state, when undefined it is neither active nor inactive */
    isActive?: boolean;
}

export interface LoadingButtonProps extends Omit<ButtonProps, 'icon'> {
    /** True if the component is in loading state */
    isLoading?: boolean;
    icon?: {
        position?: HorizontalPosition;
    } & LoadingProps;
}

export type Social = 'Facebook' | 'Twitter' | 'Linkedin' | 'Github';
export type SocialButtonPreset = Extract<Preset, 'solid' | 'soft' | 'outline'>;
export type SocialButtonShape = Extract<Shape, 'square' | 'circle'>;

export interface SocialButtonProps extends Presettable<SocialButtonPreset>, Shapeable<SocialButtonShape> {
    /** The button's social platform */
    social: Social;
}
