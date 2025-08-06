import type { LabelProps } from '@/Components/Label/Internal/Types';

export type LabelType = 'text' | 'floating' | 'inline';

// It can be used for inputs like input and textarea
export interface InputLabel<T extends LabelType = LabelType> extends Omit<LabelProps<T>, 'componentName'> {
    /** The Label's text */
    text: string;
}
