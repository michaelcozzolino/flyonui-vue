import type { Navigation, WithTo } from '@/Components/Link';
import type { RouterLinkProps }    from 'vue-router';

export interface FoRouterLinkProps extends Omit<RouterLinkProps, 'to'>, WithTo {
    /** Custom navigation handler, to be used only in apps that do not support Vue Router E.G Vitepress */
    navigation?: Navigation;
}
