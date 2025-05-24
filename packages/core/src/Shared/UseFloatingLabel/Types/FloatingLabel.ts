import type { ComponentName } from '@/Shared/Utils/Internal';

export type FloatingLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;
