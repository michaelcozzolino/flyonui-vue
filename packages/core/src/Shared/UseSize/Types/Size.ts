import type { ComponentName } from '@/Shared';

export type SizableComponentName = Extract<
    ComponentName,
    'FoBadge'
    | 'FoButton'
    | 'FoCheckbox'
    | 'FoInputText'
    | 'FoKeyboard'
    | 'FoLoading'
    | 'FoMenu'
    | 'FoSelect'
    | 'FoTable'
    | 'FoTextarea'
    | 'FoTooltip'
>;

export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface Sizable<T extends Size = Size> {
    /** The component's size */
    size?: T;
}

export type IconSize = 'doubleExtraSmall' | Size | 'doubleExtraLarge';
