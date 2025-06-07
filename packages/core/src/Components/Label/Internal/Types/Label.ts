import type { LabelType }                  from '@/Components/Label';
import type { FloatingLabelComponentName } from '@/Shared/UseFloatingLabel';
import type { ComponentName }              from '@/Shared/Utils/Internal';

export type ConfigurableLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export interface LabelProps {
    componentName?: FloatingLabelComponentName;
    type?:          LabelType;
    isHidden?:      boolean;
}
