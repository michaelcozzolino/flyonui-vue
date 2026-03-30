import type { SelectOption } from '@/UI/Forms';
import type { Searchable }   from '@/UI/Tables';

export type DatatableControlsProps = Searchable & {
    pageOptions: SelectOption[];
    totalPages:  number;
};
