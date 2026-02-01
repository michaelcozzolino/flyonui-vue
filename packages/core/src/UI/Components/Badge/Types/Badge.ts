import type { Colorable, Preset, Presettable, Shapeable, Sizable  } from '@/Lib';
import type { Dismissible }                                         from '@/Lib/UseDismissibleTransition';
import type { WithConfigurableIcon }                                from '@/UI/Customization/Icon';

export type BadgePreset = Exclude<Preset, 'gradient' | 'text'>;

export type BadgeProps = Colorable & Presettable<BadgePreset> & Shapeable & Sizable & WithConfigurableIcon & Dismissible;
