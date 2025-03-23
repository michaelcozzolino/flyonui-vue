export type Default = 'default';

// todo: btn must become button
export type ElementName =
    'badge'
    | 'btn'
    | 'checkbox'
    | 'icon'
    | 'input-text'
    | 'join'
    | 'label'
    | 'link'
    | 'list-group'
    | 'list-group-item'
    | 'loading'
    | 'menu'
    | 'menu-item'
    | 'select'
    | 'stat-list'
    | 'textarea';

export type ColorableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox' | 'link' | 'loading'>;
export type PresetElementName = Extract<ElementName, 'btn' | 'badge'>;
export type ResponsiveElementName = Extract<ElementName, 'btn' | 'join'>;
export type ShapeableElementName = Extract<ElementName, 'badge' | 'btn' | 'input-text'>;
export type SizableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox' | 'icon' | 'input-text' | 'loading' | 'menu' | 'select'>;
export type StatefulElementName = Extract<ElementName, 'btn' | 'menu-item'>;
export type OrientableElementName = Extract<ElementName, 'checkbox' | 'join' | 'list-group' | 'list-group-item' | 'menu' | 'stat-list'>;
export type BorderableElementName = Extract<ElementName, 'stat-list'>;
export type LabellableTypeElementName = Extract<ElementName, 'input-text' | 'select' | 'textarea'>;
export type LabellableElementName = Extract<ElementName, 'label'> | LabellableTypeElementName;
export type StripedElementName = Extract<ElementName, 'list-group' | 'list-group-item'>;

export const availableColors = ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const;
export type Color = typeof availableColors[number];

export type Preset = Default | 'gradient' | 'text' | 'soft' | 'outline';
export type Size = Default | 'extraSmall' | 'small' | 'large' | 'extraLarge' | 'doubleExtraLarge';
export type Orientation = 'horizontal' | 'vertical';

export type State = Default | 'active' | 'disabled';
export type Layout = Default | 'wide' | 'block';
export type Shape = Default | 'circle' | 'pilled' | 'square';
