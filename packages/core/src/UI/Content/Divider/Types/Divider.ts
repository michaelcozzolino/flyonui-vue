import type { Colorable, Orientable, Preset, Presettable } from '@/Lib';
import type { Alignable }                                  from '@/Lib/UseAlignment';

export type DividerPreset = Extract<Preset, 'dash' | 'dot'>;

export type DividerProps = Colorable & Presettable<DividerPreset> & Alignable & Orientable;
