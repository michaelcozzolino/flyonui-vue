import type { WithLabel }      from '@/Components';
import type { WithHelperText } from '@/Components/HelperText';
import type { Colorable }      from '@/Shared/UseColor';
import type { MaybeStringId }  from '@/Shared/UseIdentifiable';
import type { Orientable }     from '@/Shared/UseOrientation';
import type { Sizable }        from '@/Shared/UseSize';
import type { Disableable }    from '@/Shared/UseState';
import type { Validity }       from '@/Shared/UseValidity';

export type CheckboxProps = MaybeStringId & Colorable & Disableable & Sizable & Validity & WithHelperText & WithLabel;

export type CheckboxGroupProps = Orientable;
