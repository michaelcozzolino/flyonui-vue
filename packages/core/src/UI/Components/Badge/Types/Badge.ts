import type { Colorable, Preset, Presettable, Shapeable, Sizable  } from '@/Lib';
import type { WithConfigurableIcon }                                from '@/UI/Customization/Icon';

export type BadgePreset = Exclude<Preset, 'gradient' | 'text'>;

// todo: dismissible badge
export interface BadgeProps extends Colorable, Presettable<BadgePreset>, Shapeable, Sizable, WithConfigurableIcon {
    isDismissible?: boolean;
}
