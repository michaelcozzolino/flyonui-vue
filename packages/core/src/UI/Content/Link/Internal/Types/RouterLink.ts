import type { RouterLinkProps }                   from 'vue-router';
import type { CustomNavigatable, WithRequiredTo } from '@/UI/Content/Link';

export type FoRouterLinkProps = CustomNavigatable & Omit<RouterLinkProps, 'to'> & WithRequiredTo;
