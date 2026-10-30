import type { ComputedRef, DirectiveBinding, FunctionDirective } from 'vue';
import type { HorizontalPosition }                               from '@/Types/Utils';
import { leftSideMaskClass, rightSideMaskClass }                 from '@/UI/Content/Mask';

export function vMask(): FunctionDirective<HTMLElement, string, string, HorizontalPosition> {
    return (el: HTMLElement, { value, arg }: DirectiveBinding<string, string, HorizontalPosition>): void => {
        // Removing all the masks previously added to avoid conflicts on updated
        el.classList.remove(...Array.from(el.classList).filter((c: string): boolean => c.startsWith('mask-')));

        const classes: string[] = value.split(' ');

        if (arg !== undefined) {
            let sideClass: ComputedRef<string> | null = null;

            if (arg === 'left') {
                sideClass = leftSideMaskClass;
            } else if (arg === 'right') {
                sideClass = rightSideMaskClass;
            }

            if (sideClass !== null) {
                classes.push(sideClass.value);
            }
        }

        el.classList.add(...classes);
    };
}
