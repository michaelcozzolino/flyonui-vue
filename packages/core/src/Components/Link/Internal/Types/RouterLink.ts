import type { To }              from '@/Components/Link';
import type { RouterLinkProps } from 'vue-router';

export interface FoRouterLinkProps extends RouterLinkProps {
    to: To;
}
