import type { FoRouterLinkProps } from '@/Components/Link/Internal';
import type { Colorable }         from '@/Shared/UseColor';
import type { RouteLocationRaw }  from 'vue-router';

export type Link = string;

export type To = Link | RouteLocationRaw;

export type UnderlineLinkEffect = 'hover' | 'hover-animated' | 'no-underline';

export interface LinkProps extends FoRouterLinkProps, Colorable {
    /** If true, when the link is hovered it will be underlined */
    underlineEffect?: UnderlineLinkEffect;
}

export type WithRequiredTo = Required<WithTo>;

export interface WithTo {
    /** Target navigation url, if string, it is a standard url, else a Vue Router location */
    to?: To;
}

// to be used only for SPA that do not use vue-router
export interface Navigation {
    /** Navigate to a path */
    navigate: (to: string) => Promise<void>;

    /** Currently active path */
    activePath: string;
}
