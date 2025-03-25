import type { LabelType }            from '@/Components/Label';
import type { Id, IsDisabled, Size } from '@/Shared/Types';

export interface SelectOption<T extends number | string = number> extends Id<T>, IsDisabled {
    text: string;
}

export interface SelectProps<T extends string | number, K extends SelectOption<T>> {
    label: {
        text:  string;
        type?: Exclude<LabelType, 'inline'>; // When undefined the label will be a text by default
    };
    options: K[];
    size?:   Exclude<Size, 'extraLarge'>;
}
