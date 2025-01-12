import type { IconType }       from '@/Components/Button/Types/Button';
import type { RouteRecordRaw } from 'vue-router';

export interface MenuItem {
    icon?:  IconType;
    title?: string; // to be used
    text: {
        // todo: maybe these properties should not stay inside this object as having an hidden item and a non hidden one doesnt make so much sense
        value:      string;
        asTooltip?: boolean;
        isHidden?:  boolean;
    };
    children?:   MenuItem[];
    to:          RouteRecordRaw | string;
    isDisabled?: boolean;
}
