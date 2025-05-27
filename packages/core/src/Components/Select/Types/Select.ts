import type { LabelType }   from '@/Components/Label';
import type { Id }          from '@/Shared/UseIdentifiable';
import type { Sizable }     from '@/Shared/UseSize';
import type { Disableable } from '@/Shared/UseState';

export interface SelectOption<T extends number | string = number> extends Id<T>, Disableable {
    text: string;
}

export interface SelectProps<T extends string | number = number, K extends SelectOption<T> = SelectOption<T>> extends Sizable {
    label: {
        text:  string;
        type?: Exclude<LabelType, 'inline'>; // When undefined the label will be a text by default
    };
    options: K[];
}
