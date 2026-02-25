import type { Colorable, Preset, Presettable } from '@/Lib';

export type RadialProgressBackgroundPreset = Extract<Preset, 'solid' | 'soft'>;

export type RadialProgressBackgroundProps = Colorable & Presettable<RadialProgressBackgroundPreset>;

export interface RadialProgressProps extends Colorable {
    /** The progress' value */
    value: number;

    /** The progress' background style, if this is set, the color prop will be ignored */
    background?: RadialProgressBackgroundProps;
}
