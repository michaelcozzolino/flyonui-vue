import type { LabelType }                  from '@/Components/Label';
import type { ComponentName }              from '@/Shared';
import type { FloatingLabelComponentName } from '@/Shared/UseFloatingLabel';

export type ConfigurableLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export interface LabelProps {
    componentName?: FloatingLabelComponentName;
    type?:          LabelType;
    isHidden?:      boolean;
}
