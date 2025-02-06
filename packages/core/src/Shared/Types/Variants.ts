export type Default = 'default';

export type ElementName = 'badge' | 'btn' | 'checkbox' | 'icon' | 'input' | 'label' | 'list-group' | 'list-group-item' | 'menu' | 'select' | 'stat-list';
export type ColorableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox'>;
export type PresetElementName = Extract<ElementName, 'btn' | 'badge'>;
export type ShapeableElementName = Extract<ElementName, 'badge' | 'btn'>;
export type SizableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox' | 'icon' | 'menu' | 'select'>;
export type StatefulElementName = Extract<ElementName, 'btn'>;
export type OrientableElementName = Extract<ElementName, 'checkbox' | 'list-group' | 'list-group-item' | 'menu' | 'stat-list'>;
export type BorderableElementName = Extract<ElementName, 'stat-list'>;
export type LabellableTypeElementName = Extract<ElementName, 'input' | 'select'>;
export type LabellableElementName = Extract<ElementName, 'label'> | LabellableTypeElementName;
export type StripedElementName = Extract<ElementName, 'list-group' | 'list-group-item'>;

export const availableColors = ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
export type Color = typeof availableColors[number];

export type Preset = Default | 'gradient' | 'text' | 'soft' | 'outline';
export type Size = Default | 'extraLarge' | 'large' | 'small' | 'extraSmall';
export type Orientation = 'horizontal' | 'vertical';

export type State = Default | 'active' | 'disabled';
export type Layout = Default | 'wide' | 'block';
export type Shape = Default | 'circle' | 'pilled' | 'square';
