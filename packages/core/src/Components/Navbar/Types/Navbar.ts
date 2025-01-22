import type { RouteRecordRaw } from 'vue-router';

export interface NavbarLink {
    id:   number;
    text: string;
    to:   RouteRecordRaw | string;
}
