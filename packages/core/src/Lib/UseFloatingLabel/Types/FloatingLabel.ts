import type { ComponentName } from '@/Lib';

export type FloatingLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;
