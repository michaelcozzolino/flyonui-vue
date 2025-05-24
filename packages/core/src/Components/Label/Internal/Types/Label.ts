import type { LabelType }                  from '@/Components/Label';
import type { FloatingLabelComponentName } from '@/Shared/UseFloatingLabel';

export interface LabelProps {
    componentName?: FloatingLabelComponentName;
    type?:          LabelType;
    isHidden?:      boolean;
}
