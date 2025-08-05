import type { Borderable, Responsive, Sizable, Size } from '@/Shared';

type RowsOrColumns = 'rows' | 'columns';

export interface StripedTable {
    /**
     * Indicates whether the table is striped on the rows or columns
     * @values 'rows' | 'columns'
     */
    isStriped?: RowsOrColumns;
}

export interface TableProps extends Borderable, Responsive, StripedTable, Sizable<Exclude<Size, 'extraLarge'>> {
    /**
     * Indicates whether the table has pinned rows or columns
     * @values 'rows' | 'columns'
     */
    isPinned?: RowsOrColumns;
}

export interface TableRowProps {
    /** True if the row can be hovered */
    isHoverable?: boolean;
}
