import type { Color }                             from '@/Shared/Types';
import type { RouteLocationRaw, RouterLinkProps } from 'vue-router';

export type To = string | RouteLocationRaw;

/**
 * @internal
 */
export interface FoRouterLinkProps extends RouterLinkProps {
    to: To;
}

export interface LinkProps extends FoRouterLinkProps {
    color?:           Color;
    underlineEffect?: 'hover' | 'hover-animated';
}
