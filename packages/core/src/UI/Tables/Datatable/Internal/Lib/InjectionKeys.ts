import type { InjectionKey } from 'vue';

interface DataTableColumnFilterContext<Item extends object = object> {
    /**
     * A function to set the filter that is being used for a specific header
     * @key unique per data table header, where the filter is supposed to be set
     * @onFilter callback function to filter the data, if null, it means that the filter should be removed from the map
     *           where it is stored
     */
    setFilter: (key: symbol, onFilter: ((item: Item) => boolean) | null) => void;
}

export const dataTableColumnFilterInjectionKey: InjectionKey<DataTableColumnFilterContext> = Symbol('dataTableColumnFilter');
