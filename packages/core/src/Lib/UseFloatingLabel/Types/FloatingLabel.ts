import type { ComponentName } from '@/Lib';

// todo: there is a mismatch between configurable and floating, this should be checked
export type FloatingLabelComponentName = Extract<ComponentName, 'FoInputFile' | 'FoInputText' | 'FoSelect' | 'FoTextarea'>;
