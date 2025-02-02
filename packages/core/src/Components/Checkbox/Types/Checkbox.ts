import type { Color, Size } from '@/Shared/Types/Variants';

export type CheckboxSize = Exclude<Size, 'extraLarge'>;

export interface CheckboxProps {
    color?:      Color | string; // The string is for custom colors
    label?:      string;
    helperText?: string;
    size?:       CheckboxSize;
    isDisabled?: boolean;
    isValid?:    boolean; // When undefined, no validation state is used
}
