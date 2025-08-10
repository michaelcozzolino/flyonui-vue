export interface Immutable {
    /** If true the component cannot be updated */
    isReadonly?: boolean;
}

export interface Flushable {
    /** If true, rounder corners and borders are removed */
    isFlushed?: boolean;
}

export interface WithPlaceholder {
    /** The component's placeholder */
    placeholder?: string;
}

export interface WithText {
    /** The component's text */
    text: string;
}
