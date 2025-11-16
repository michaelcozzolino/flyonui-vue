import type { ComponentName, FloatingLabelComponentName, MaybeStringId } from '@/Lib';
import type { LabelType }                                                from '@/UI/Components';

export type ConfigurableLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export interface LabelProps<T extends LabelType = LabelType> extends MaybeStringId {
    componentName?: FloatingLabelComponentName;

    /** The Label's type */
    type?: T;

    /** Hides the component visually */
    isHidden?: boolean;
}
