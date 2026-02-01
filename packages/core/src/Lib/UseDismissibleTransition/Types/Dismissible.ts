export interface Dismissible {
    /** If true, the component can be dismissed */
    isDismissible?: boolean;
}

export interface DismissibleEmits {
    (e: 'dismiss'): void;
}
