import type { LabelProps } from '@/Components/Label/Internal/Types';

export type LabelType = 'text' | 'floating' | 'inline';

export type Label = string;

export type ConfigurableLabel<T extends LabelType = LabelType> = Label | InputLabel<T>;

// It can be used for inputs like input and textarea
export interface InputLabel<T extends LabelType = LabelType> extends Omit<LabelProps<T>, 'componentName'> {
    /** The input label's text */
    text: string;
}

export interface WithConfigurableInputLabel<T extends LabelType = LabelType> {
    /**
     * The input label's text or an object containing "text" and "type" where type can be "text" | "floating" | "inline"
     */
    label?: ConfigurableLabel<T>;
}

export interface WithLabel {
    /** The label's text */
    label?: Label;
}
