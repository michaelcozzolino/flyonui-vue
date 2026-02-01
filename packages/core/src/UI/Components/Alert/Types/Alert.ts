import type { Colorable, Preset, Presettable  } from '@/Lib';
import type { Dismissible }                     from '@/Lib/UseDismissibleTransition';

export type AlertPreset = Exclude<Preset, 'gradient' | 'text'>;

export type AlertProps = Colorable & Presettable<AlertPreset> & Dismissible;
