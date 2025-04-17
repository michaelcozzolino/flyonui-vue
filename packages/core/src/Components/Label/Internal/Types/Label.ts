import type { LabelType }             from '@/Components/Label';
import type { LabellableElementName } from '@/Shared/Types';

export interface LabelProps {
    element?:  LabellableElementName;
    type?:     LabelType;
    isHidden?: boolean;
}
