import type { HorizontalPosition }               from '@/Types/Utils';
import type { ComputedRef, FunctionDirective }   from 'vue';
import { leftSideMaskClass, rightSideMaskClass } from '@/UI/Content/Mask';

export function vMask(): FunctionDirective<HTMLElement, string, string, HorizontalPosition> {
    return (el, { value, arg }) => {
        // Removing all the masks previously added to avoid conflicts on updated
        el.classList.remove(...Array.from(el.classList).filter(c => c.startsWith('mask-')));

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
