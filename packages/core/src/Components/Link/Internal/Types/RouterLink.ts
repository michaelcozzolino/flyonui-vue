import type { Navigation, To }  from '@/Components/Link';
import type { RouterLinkProps } from 'vue-router';

export interface FoRouterLinkProps extends RouterLinkProps {
    navigation?: Navigation;
    to:          To;
}
