import type { Borderable, MaybeStringId, Responsive, Sizable, Size } from '@/Lib';

type RowsOrColumns = 'rows' | 'columns';

export interface StripedTable {
    /** It indicates whether the table is striped on the rows or columns */
    isStriped?: RowsOrColumns;
}

export interface TableProps extends MaybeStringId,
    Borderable,
    Responsive,
    StripedTable,
    Sizable<Exclude<Size, 'extraLarge'>> {
    /** It indicates whether the table has pinned rows or columns */
    isPinned?: RowsOrColumns;
}

export interface TableRowProps {
    /** True if the row can be hovered */
    isHoverable?: boolean;
}
