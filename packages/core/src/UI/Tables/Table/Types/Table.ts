import type { Borderable, MaybeStringId, Responsive, Sizable, Size } from '@/Lib';
import type { Slot }                                                 from 'vue';

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

export interface TableCellProps {
    /** The number of columns for which a cell should span over */
    colspan?: number;

    /** The number of rows for which a cell should span over */
    rowspan?: number;
}

export interface TableSlots {
    /** The table's <thead /> */
    head?: Slot;

    /** The table's <tbody /> */
    body?: Slot;

    /** The table's <tfoot /> */
    footer?: Slot;
}
