import type { IsDisabled, IsValid, SizeWithout2XL } from '@/Shared/Types';
import type { Color }                               from '@/Shared/Types/Variants';

export interface CheckboxProps extends IsDisabled, IsValid {
    color?:      Color;
    label?:      string;
    helperText?: string;
    size?:       SizeWithout2XL;
}
