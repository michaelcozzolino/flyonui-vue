import type { ElementName } from '@/Shared/Types';

export type ColorableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox' | ColorableTextElementName>;
export type ColorableTextElementName = Extract<ElementName, 'link' | 'loading'>;

export type Color = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
