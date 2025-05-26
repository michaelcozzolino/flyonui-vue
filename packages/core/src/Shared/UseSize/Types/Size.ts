import type { ComponentName } from '@/Shared/Utils/Internal';

export type SizableComponentName = Extract<
    ComponentName,
    'FoBadge' | 'FoButton' | 'FoCheckbox' | 'FoInputText' | 'FoLoading' | 'FoMenu' | 'FoSelect' | 'FoTextarea' | 'FoTooltip'
>;

export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface Sizable {
    size?: Size;
}

export type IconSize = 'doubleExtraSmall' | Size | 'doubleExtraLarge';
