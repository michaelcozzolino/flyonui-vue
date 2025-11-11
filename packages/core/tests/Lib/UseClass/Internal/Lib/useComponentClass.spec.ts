import type { ComponentName }    from '@/Lib';
import type { MaybeRefOrGetter } from 'vue';
import { useComponentClass }     from '@/Lib/UseClass/Internal';
import { describe, expect, it }  from 'vitest';
import { ref }                   from 'vue';

describe('useComponentClass', () => {
    const componentName: ComponentName = 'FoButton';
    const classKey                     = 'primary';
    const expectedClass                = 'btn-primary';
    const availableClasses             = { FoButton: { [classKey]: expectedClass } };

    it.each<[MaybeRefOrGetter<'FoButton'>, MaybeRefOrGetter<Record<'FoButton', Record<string, string>>>, MaybeRefOrGetter<string>]>([
        [componentName, availableClasses, classKey],
        [ref(componentName), ref(availableClasses), ref(classKey)],
        [() => componentName, () => availableClasses, () => classKey],
    ])('returns the right component class ', (
        componentName: MaybeRefOrGetter<'FoButton'>,
        availableClasses: MaybeRefOrGetter<Record<'FoButton', Record<string, string>>>,
        classKey: MaybeRefOrGetter<string>,
    ) => {
        const actualClass = useComponentClass(
            componentName,
            availableClasses,
            classKey,
        );

        expect(actualClass.value).toBe(expectedClass);
    });
});
