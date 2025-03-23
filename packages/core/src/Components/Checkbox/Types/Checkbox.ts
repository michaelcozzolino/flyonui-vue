import type { IsDisabled, IsValid } from '@/Shared/Types';
import type { Color, Size }         from '@/Shared/Types/Variants';

export type CheckboxSize = Exclude<Size, 'extraLarge'>;

export interface CheckboxProps extends IsDisabled, IsValid {
    color?:      Color | string; // The string is for custom colors
    label?:      string;
    helperText?: string;
    size?:       CheckboxSize;
}
