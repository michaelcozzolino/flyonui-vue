import type { Colorable, Orientable, Shape, Shapeable, Striped } from '@/Lib';
import type { HorizontalPosition, VerticalPosition }             from '@/Types';

export type ProgressShape = Extract<Shape, 'rounded' | 'square'>;

export interface ProgressProps extends Colorable, Orientable, Shapeable<ProgressShape>, Striped {
    /** The progress' value. When it is not a number, you can configure its label's position and title */
    value:          number | {
        value: number;
        label: {
            title?:   string;
            position: 'within' | 'floating' | HorizontalPosition | VerticalPosition;
            side?:    HorizontalPosition;
        };
    };

    /** If true, the bars will be animated */
    isAnimated?: boolean;
}

export interface ProgressStepProps extends Colorable {
    /** The progress' steps. Each bar is a step.  */
    steps: number;

    /** The progress' value  */
    value: number;
}
