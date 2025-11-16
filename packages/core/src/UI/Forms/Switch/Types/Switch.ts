import type { Orientable, Preset, Presettable } from '@/Lib';
import type { WithConfigurableIcon }            from '@/UI/Customization';
import type { CheckboxProps }                   from '@/UI/Forms';

export type SwitchPreset = Extract<Preset, 'solid' | 'outline'>;

export type SwitchProps = CheckboxProps & Presettable<SwitchPreset> & WithConfigurableIcon;

export type SwitchGroupProps = Orientable;
