import type { IsStriped, Orientation } from '@/Shared/Types/Variants';

export interface ListGroupProps extends IsStriped {
    orientation?:    Orientation;
    isFlushed?:      boolean;
    withoutGutters?: boolean;
}

export type ListGroupItemProps = IsStriped;
