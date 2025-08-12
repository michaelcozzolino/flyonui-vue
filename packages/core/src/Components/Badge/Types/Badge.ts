import type { WithConfigurableIcon } from '@/Components/Icon';
import type { Colorable }            from '@/Shared/UseColor';
import type { Preset, Presettable }  from '@/Shared/UsePreset';
import type { Shapeable }            from '@/Shared/UseShape';
import type { Sizable }              from '@/Shared/UseSize';

export type BadgePreset = Exclude<Preset, 'gradient' | 'text'>;

// todo: dismissible badge
export interface BadgeProps extends Colorable, Presettable<BadgePreset>, Shapeable, Sizable, WithConfigurableIcon {
    isDismissible?: boolean;
}
