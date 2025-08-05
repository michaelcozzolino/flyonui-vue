import type { Colorable } from '@/Shared/UseColor';
import type { Sizable }   from '@/Shared/UseSize';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps extends Colorable, Sizable {
    /**
     * The component's loading animation type
     *
     * @values 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
     */
    animation?: Animation;
}
