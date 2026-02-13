import type { Colorable, Preset, Presettable  } from '@/Lib';
import type { Dismissible }                     from '@/Lib/UseDismissibleTransition';

export type AlertPreset = Exclude<Preset, 'gradient' | 'text' | 'dot'>;

export type AlertProps = Colorable & Presettable<AlertPreset> & Dismissible;
