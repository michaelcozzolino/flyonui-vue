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

export interface DataTableHeaderProps<Item extends object, Value extends string | number> extends TableCellProps {
    /** The filter for the data table column, if you do not need a filter use the FoTableHeader component */
    filter: {
        /** The possible accepted values for the filter */
        values: Value[];

        /**
         * A callback to filter an item according to the specific filter value
         * @returns false if the value should be filtered out, true otherwise
         */
        onFilter: (item: Item, filter: Value) => boolean;
    };
}
