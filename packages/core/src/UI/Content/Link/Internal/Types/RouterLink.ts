import type { CustomNavigatable, WithRequiredTo } from '@/UI/Content/Link';
import type { RouterLinkProps }                   from 'vue-router';

export type FoRouterLinkProps = CustomNavigatable & Omit<RouterLinkProps, 'to'> & WithRequiredTo;
