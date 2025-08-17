import type { Colorable, Disableable, MaybeStringId, Orientable, Sizable, Validity  } from '@/Lib';
import type { WithHelperText, WithLabel  }                                            from '@/UI/Components';

export type CheckboxProps = MaybeStringId & Colorable & Disableable & Sizable & Validity & WithHelperText & WithLabel;

export type CheckboxGroupProps = Orientable;
