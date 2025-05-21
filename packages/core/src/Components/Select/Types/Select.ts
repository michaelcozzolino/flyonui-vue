import type { LabelType }            from '@/Components/Label';
import type { Id }                   from '@/Shared/UseIdentifiable';
import type { SizeWithout2XL }       from '@/Shared/UseSize';
import type { SelectHTMLAttributes } from 'vue';

export interface SelectOption<T extends number | string = number> extends Id<T>,
    /* @vue-ignore */ Pick<SelectHTMLAttributes, 'disabled'> {
    text: string;
}

export interface SelectProps<T extends string | number = number, K extends SelectOption<T> = SelectOption<T>> {
    label: {
        text:  string;
        type?: Exclude<LabelType, 'inline'>; // When undefined the label will be a text by default
    };
    options: K[];
    size?:   SizeWithout2XL;
}
