import type { Orientable, Preset, Presettable, TextColorable } from '@/Lib';
import type { Alignable }                                      from '@/Lib/UseAlignment';

export type DividerPreset = Extract<Preset, 'dash' | 'dot'>;

export type DividerProps = TextColorable & Presettable<DividerPreset> & Alignable & Orientable;
