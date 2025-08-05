import type { ComponentName } from '@/Shared';

export type FloatingLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;
