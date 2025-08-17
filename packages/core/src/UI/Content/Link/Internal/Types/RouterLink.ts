import type { Navigation, WithRequiredTo } from '@/UI/Content/Link';
import type { RouterLinkProps }            from 'vue-router';

export interface FoRouterLinkProps extends Omit<RouterLinkProps, 'to'>, WithRequiredTo {
    /** Custom navigation handler, to be used only in apps that do not support Vue Router E.G Vitepress */
    navigation?: Navigation;
}
