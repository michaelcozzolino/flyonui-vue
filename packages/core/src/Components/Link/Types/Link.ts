import type { FoRouterLinkProps } from '@/Components/Link/Internal';
import type { Color }             from '@/Shared/UseColor';
import type { RouteLocationRaw }  from 'vue-router';

export type To = string | RouteLocationRaw;

export type UnderlineLinkEffect = 'hover' | 'hover-animated' | 'no-underline';

export interface LinkProps extends FoRouterLinkProps {
    color?:           Color;
    underlineEffect?: UnderlineLinkEffect;
}
