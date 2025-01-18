export interface Stat {
    id:           number;
    title:        string;
    value:        number | string;
    description?: string;
    classes?: {
        stat?:        string;
        title?:       string;
        value?:       string;
        description?: string;
    };
    valueAsTitle?: boolean; // If true the value will be used as title on top of the stat and vice versa
}
