import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type SizableComponentName = Extract<
    ComponentName,
    'FoBadge' | 'FoButton' | 'FoCheckbox' | 'FoIcon' | 'FoInputText' | 'FoLoading' | 'FoMenu' | 'FoSelect' | 'FoTextarea' | 'FoTooltip'
>;

export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'doubleExtraLarge';
export type SizeWithout2XL = Exclude<Size, 'doubleExtraLarge'>;
