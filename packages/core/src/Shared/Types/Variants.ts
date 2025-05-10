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
    | 'stat'
    | 'stat-description'
    | 'stat-title'
    | 'stat-value'
    | 'stats'
    | 'swap'
    | 'textarea'
    | 'tooltip';

export type PresetElementName = Extract<ElementName, 'btn' | 'badge'>;
export type ResponsiveElementName = Extract<ElementName, 'btn' | 'join'>;
export type ShapeableElementName = Extract<ElementName, 'badge' | 'btn' | 'input-text'>;
export type SizableElementName = Extract<ElementName, 'badge' | 'btn' | 'checkbox' | 'icon' | 'input-text' | 'loading' | 'menu' | 'select' | 'textarea' | 'tooltip'>;
export type StatefulElementName = Extract<ElementName, 'btn' | 'menu-item'>;
export type OrientableElementName = Extract<ElementName, 'checkbox' | 'join' | 'list-group' | 'list-group-item' | 'menu' | 'stats'>;
export type BorderableElementName = Extract<ElementName, 'stats'>;
export type FloatingElementName = Extract<ElementName, 'input-text' | 'select' | 'textarea'>;
export type LabellableElementName = FloatingElementName;
export type StripedElementName = Extract<ElementName, 'list-group' | 'list-group-item'>;

export type Preset = Default | 'gradient' | 'text' | 'soft' | 'outline' | 'dash';
export type Size = Default | 'extraSmall' | 'small' | 'large' | 'extraLarge' | 'doubleExtraLarge';
export type SizeWithout2XL = Exclude<Size, 'doubleExtraLarge'>;
export type Orientation = 'horizontal' | 'vertical';

export type State = Default | 'active' | 'disabled';
export type Layout = Default | 'wide' | 'block';
export type Shape = Default | 'circle' | 'pilled' | 'square';
export type HorizontalPosition = 'left' | 'right';
