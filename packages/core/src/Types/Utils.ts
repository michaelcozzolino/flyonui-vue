export type Default = 'default';

// todo: probably rename to text or head direction
export type Direction = 'ltr' | 'rtl';
export type HorizontalPosition = 'left' | 'right';

export interface Image {
    src: string;
    alt: string;
}

export type VueClass = string | Record<string, boolean> | VueClass[];
