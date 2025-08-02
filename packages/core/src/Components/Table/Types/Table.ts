import type { Borderable, Responsive, Sizable, Size } from '@/Shared';

type RowsOrColumns = 'rows' | 'columns';

export interface StripedTable {
    isStriped?: RowsOrColumns;
}

export interface TableProps extends Borderable, Responsive, StripedTable, Sizable<Exclude<Size, 'extraLarge'>> {
    isPinned?: RowsOrColumns;
}

export interface TableRowProps {
    isHoverable?: boolean;
}
