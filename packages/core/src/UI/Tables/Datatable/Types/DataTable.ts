import type { TableCellProps } from '@/UI/Tables';

export interface Searchable {
    /**
     * If true, an input search will be displayed to allow the user to search for items in the datatable,
     * the search is performed through each property of each datatable's item
     */
    isSearchable?: boolean;
}

export interface DatatableProps extends Searchable {
    // todo: implement ajax functionality
    // useAjax?: boolean;

    /** When it is an array of numbers, a dropdown will be shown to select one of the given possibilities */
    rowsPerPage: number | number[];

    /** Decides the position to show the datatable controls */
    controlsPosition?: 'up' | 'down' | 'both';
}

export interface DataTableSelectFilter<Item extends object, Value extends string> {
    /** The select filter type will show a dropdown with possible values */
    type: 'select';

    /** The possible accepted values for the filter */
    values: Value[];

    /**
     * A callback to filter an item according to the specific filter value
     * @returns false if the value should be filtered out, true otherwise
     */
    onFilter: (item: Item, filter: Value) => boolean;
}

export interface DataTableRangeFilter<Item extends object> {
    /**
     * The range filter type will show two inputs to be optionally filled to have a filter
     * between a min and max range
     */
    type:     'range';
    getValue: (item: Item) => number;
}

export type DataTableColumnFilters<
    Item extends object,
    Value extends string,
> = DataTableSelectFilter<Item, Value> | DataTableRangeFilter<Item>;

export interface DataTableHeaderProps<Item extends object, Value extends string> extends TableCellProps {
    /** The filter for the data table column */
    filter?: DataTableColumnFilters<Item, Value>;
}
