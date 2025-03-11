import type { Color }                             from '@/Shared/Types';
import type { RouteLocationRaw, RouterLinkProps } from 'vue-router';

export type To = string | RouteLocationRaw;

/**
 * @internal
 */
export interface FoRouterLinkProps extends RouterLinkProps {
    to: To;
}

export type UnderlineLinkEffect = 'hover' | 'hover-animated' | 'no-underline';

export interface LinkProps extends FoRouterLinkProps {
    color?:           Color;
    underlineEffect?: UnderlineLinkEffect;
}
