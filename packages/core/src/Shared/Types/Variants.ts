export type Default = 'default';

export type ElementName = 'badge' | 'btn' | 'checkbox' | 'input' | 'menu' | 'select' | 'stat-list';
export type ColorableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox'>;
export type PresetElementName = Extract<ElementName, 'btn' | 'badge'>;
export type ShapeableElementName = Extract<ElementName, 'badge' | 'btn'>;
export type SizableElementName = Extract<ElementName, 'badge' | 'btn' | 'menu' | 'select'>;
export type OrientableElementName = Extract<ElementName, 'menu' | 'stat-list'>;
export type BorderableElementName = Extract<ElementName, 'stat-list'>;
export type FillableElementName = Extract<ElementName, 'input' | 'select'>;
export type LabellableElementName = FillableElementName;

export type Color = Default | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type Preset = Default | 'gradient' | 'text' | 'soft' | 'outline';
export type Size = Default | 'extraLarge' | 'large' | 'small' | 'extraSmall';
export type Orientation = 'horizontal' | 'vertical';

export type State = Default | 'active' | 'disabled';
export type Layout = Default | 'wide' | 'block';
export type Shape = Default | 'circle' | 'pilled' | 'square';

export interface HasGlass {
    hasGlass?: boolean;
}
