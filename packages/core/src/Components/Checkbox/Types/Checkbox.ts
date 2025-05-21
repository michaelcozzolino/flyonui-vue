import type { Color }               from '@/Shared/UseColor';
import type { Orientable }          from '@/Shared/UseOrientation';
import type { SizeWithout2XL }      from '@/Shared/UseSize';
import type { IsValid }             from '@/Shared/UseValidity';
import type { InputHTMLAttributes } from 'vue';

export interface CheckboxProps extends /* @vue-ignore */ Pick<InputHTMLAttributes, 'id' | 'disabled'>, IsValid {
    color?:      Color;
    label?:      string;
    helperText?: string;
    size?:       SizeWithout2XL;
}

export type CheckboxGroupProps = Orientable;
