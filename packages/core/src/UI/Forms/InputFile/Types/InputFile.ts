import type { Disableable, MaybeStringId, Sizable, Validity }                     from '@/Lib';
import type { LabelType, WithConfigurableHelperText, WithConfigurableInputLabel } from '@/UI/Components';

export type InputFileLabelType = Extract<LabelType, 'text' | 'floating'>;

export type InputFileProps = MaybeStringId
    & Disableable
    & Sizable
    & WithConfigurableInputLabel<InputFileLabelType>
    & Validity
    & WithConfigurableHelperText;
