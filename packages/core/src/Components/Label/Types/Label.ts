export type LabelType = 'text' | 'floating' | 'inline';

// It can be used for inputs like input and textarea
export interface InputLabel<T extends LabelType = LabelType> {
    text:      string;
    type?:     T;
    isHidden?: boolean;
}
