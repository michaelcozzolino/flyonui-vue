import type { ComponentName } from '@/Lib';

export type SizableComponentName = Extract<
    ComponentName,
    'FoAvatar'
    | 'FoBadge'
    | 'FoButton'
    | 'FoCard'
    | 'FoCheckbox'
    | 'FoInputFile'
    | 'FoInputText'
    | 'FoKeyboard'
    | 'FoLoading'
    | 'FoMenu'
    | 'FoModal'
    | 'FoRadio'
    | 'FoRange'
    | 'FoSelect'
    | 'FoStatus'
    | 'FoSwitch'
    | 'FoTable'
    | 'FoTabs'
    | 'FoTextarea'
    | 'FoTooltip'
>;

export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface Sizable<T extends IconSize = Size> {
    /** The component's size */
    size?: T;
}

export type IconSize = 'doubleExtraSmall' | Size | 'doubleExtraLarge';
