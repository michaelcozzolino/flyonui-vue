import type { Colorable }         from '@/Lib';
import type { FoRouterLinkProps } from '@/UI/Content/Link/Internal';
import type { RouteLocationRaw }  from 'vue-router';

export type Link = string;

export type To = Link | RouteLocationRaw;

export type UnderlineLinkEffect = 'hover' | 'hover-animated' | 'no-underline';

export interface LinkProps extends FoRouterLinkProps, Colorable {
    /**
     * If "hover", the link will be underlined when hovered
     * If "hover-animated", the link will be underlined with an underline animation when hovered
     * If "no-underline, the link will not be underlined at all when hovered
     */
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

export interface CustomNavigatable {
    /**
     * A callback function to navigate to an SPA url and the active path of the SPA, in case the Vue Router
     * is not available (E.G: vitepress). If it is a pure Vue app use the Vue Router instead
     */
    navigation?: Navigation;
}
