import type { Colorable, Preset, Presettable, Shape, Shapeable, Sizable } from '@/Lib';
import type { Image }                                                     from '@/Types';
import type { WithRequiredIcon }                                          from '@/UI/Customization';

export type AvatarShape = Extract<Shape, 'rounded' | 'circle'>;

export type AvatarIndicatorStatus = 'away' | 'busy' | 'online' | 'offline';

export type AvatarIndicatorPlacement = 'bottom' | 'top';

export type AvatarPlaceholderPreset = Extract<Preset, 'solid' | 'soft' | 'outline'>;

export type AvatarPlaceholderProps = Colorable & Presettable<AvatarPlaceholderPreset>;

export type AvatarIcon = WithRequiredIcon & AvatarPlaceholderProps;

export interface AvatarTextProps extends AvatarPlaceholderProps {
    /** The text to be put as a placeholder, often used with initial letters of name and surname */
    text: string;
}

export interface AvatarProps extends Shapeable<AvatarShape>, Sizable {
    /**
     * It can either be an image,
     * an object representing a placeholder icon or
     * an object representing a placeholder text
     */
    avatar: Image | AvatarIcon | AvatarTextProps;

    /** An indicator representing the status of the avatar with its own placement */
    indicator?: { status: AvatarIndicatorStatus; placement: AvatarIndicatorPlacement };
}

export interface AvatarGroupProps {
    /** If true, the avatar will have a pull up animation in the group */
    isAnimated?: boolean;
}
