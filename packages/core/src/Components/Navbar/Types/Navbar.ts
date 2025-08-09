import type { Id }             from '@/Shared';
import type { RouteRecordRaw } from 'vue-router';

export interface NavbarLink extends Id {
    /** The link's text */
    text: string;

    /** The navigation target route or url */
    to: RouteRecordRaw | string;
}
