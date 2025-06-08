import type { WithConfigurableIcon } from '@/Components/Icon';
import type { Colorable }            from '@/Shared/UseColor';
import type { Preset }               from '@/Shared/UsePreset';
import type { Shapeable }            from '@/Shared/UseShape';
import type { Size }                 from '@/Shared/UseSize';

export interface BadgeProps extends Colorable, Shapeable, WithConfigurableIcon {
    preset?:        Exclude<Preset, 'gradient' | 'text'>;
    size?:          Size;
    isDismissible?: boolean;
}
