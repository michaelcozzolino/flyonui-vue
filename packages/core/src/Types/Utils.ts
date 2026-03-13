export type Default = 'default';

export type TextDirection = 'ltr' | 'rtl';
export type HorizontalPosition = 'left' | 'right';

export interface Image {
    src: string;
    alt: string;
}

export type VueClass = string | Record<string, boolean> | VueClass[];
