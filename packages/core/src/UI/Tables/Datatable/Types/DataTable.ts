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
