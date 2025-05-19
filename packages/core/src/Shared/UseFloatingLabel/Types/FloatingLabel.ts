import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type FloatingLabelComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;
