import type { Orientable } from '@/Shared/UseOrientation';
import type { Striped }    from '@/Shared/UseStripes';

export interface ListGroupProps extends Striped, Orientable {
    /** Remove the component's rounded corners */
    isFlushed?: boolean;

    /** Removes the component's gutters */
    withoutGutters?: boolean;
}

export type ListGroupItemProps = Striped;
