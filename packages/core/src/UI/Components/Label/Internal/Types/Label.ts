import type { ComponentName, FloatingLabelComponentName  } from '@/Lib';
import type { LabelType }                                  from '@/UI/Components';

export type ConfigurableLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export interface LabelProps<T extends LabelType = LabelType> {
    componentName?: FloatingLabelComponentName;

    /** The Label's type */
    type?: T;

    /** Hides the component visually */
    isHidden?: boolean;
}
