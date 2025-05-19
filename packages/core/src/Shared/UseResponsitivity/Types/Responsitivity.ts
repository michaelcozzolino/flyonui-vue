import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type ResponsiveComponentName = Extract<ComponentName, 'FoButton' | 'FoJoin'>;

export interface Responsive {
    isResponsive?: boolean;
}
