export type Default = 'default';

export type ElementName = 'btn' | 'badge' | 'checkbox' | 'input' | 'menu' | 'select';
export type ColorableElementName = Extract<ElementName, 'btn' | 'badge' | 'checkbox'>;
export type PresetElementName = Extract<ElementName, 'btn' | 'badge'>;
export type SizableElementName = Extract<ElementName, 'btn' | 'menu' | 'select'>;
export type FillableElementName = Extract<ElementName, 'input' | 'select'>;
export type LabellableElementName = FillableElementName;

export type Color = Default | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type Preset = Default | 'gradient' | 'text' | 'soft' | 'outline';
export type Size = Default | 'extraLarge' | 'large' | 'small' | 'extraSmall';

export type State = Default | 'active' | 'disabled';
export type Layout = Default | 'wide' | 'block';
export type Shape = 'circle' | 'square';
