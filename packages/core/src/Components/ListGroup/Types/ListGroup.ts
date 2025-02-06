import type { IsStriped }   from '@/Shared/Types/Props';
import type { Orientation } from '@/Shared/Types/Variants';

export interface ListGroupProps extends IsStriped {
    orientation?:    Orientation;
    isFlushed?:      boolean;
    withoutGutters?: boolean;
}

export type ListGroupItemProps = IsStriped;
