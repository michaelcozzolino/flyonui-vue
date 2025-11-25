import type { ComponentName } from '@/Lib';

export type ResponsiveComponentName = Extract<ComponentName, 'FoButton' | 'FoJoin' | 'FoTable' | 'FoTabs'>;

export interface Responsive {
    /** If true, it enables the component's responsive layout showing scrollbars on smaller screens */
    isResponsive?: boolean;
}
