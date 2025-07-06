import type { To }              from '@/Components/Link';
import type { RouterLinkProps } from 'vue-router';

export interface Navigation {
    navigate:   (to: string) => Promise<void>;
    activePath: string;
}

export interface FoRouterLinkProps extends RouterLinkProps {
    navigation?: Navigation; // to be used only for SPA that do not use vue-router
    to:          To;
}
