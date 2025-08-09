import type { LabelType }                  from '@/Components/Label';
import type { ComponentName }              from '@/Shared';
import type { FloatingLabelComponentName } from '@/Shared/UseFloatingLabel';

export type ConfigurableLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export interface LabelProps<T extends LabelType = LabelType> {
    componentName?: FloatingLabelComponentName;

    /** The Label's type */
    type?: T;

    /** Hides the component visually */
    isHidden?: boolean;
}
