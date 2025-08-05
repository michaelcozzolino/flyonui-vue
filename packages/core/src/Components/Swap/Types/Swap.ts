export type SwapAnimation = 'flip' | 'rotation';

export interface SwapProps {
    /**
     * The component's swap animation
     * @values 'flip' 'rotation'
     */
    animation?: SwapAnimation;
}
