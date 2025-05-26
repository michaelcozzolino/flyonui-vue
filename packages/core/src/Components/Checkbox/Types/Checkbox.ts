import type { Color }         from '@/Shared/UseColor';
import type { MaybeStringId } from '@/Shared/UseIdentifiable';
import type { Orientable }    from '@/Shared/UseOrientation';
import type { Sizable }       from '@/Shared/UseSize';
import type { Disableable }   from '@/Shared/UseState';
import type { IsValid }       from '@/Shared/UseValidity';

export interface CheckboxProps extends MaybeStringId, Disableable, IsValid, Sizable {
    color?:      Color;
    label?:      string;
    helperText?: string;
}

export type CheckboxGroupProps = Orientable;
