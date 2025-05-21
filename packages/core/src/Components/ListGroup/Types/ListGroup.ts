import type { Orientable } from '@/Shared/UseOrientation';
import type { Striped }    from '@/Shared/UseStripes';

export interface ListGroupProps extends Striped, Orientable {
    isFlushed?:      boolean;
    withoutGutters?: boolean;
}

export type ListGroupItemProps = Striped;
