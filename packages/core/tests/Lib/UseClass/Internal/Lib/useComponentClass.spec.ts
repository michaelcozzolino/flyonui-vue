import type { MaybeRefOrGetter } from 'vue';
import type { ComponentName }    from '@/Lib';
import { describe, expect, it }  from 'vitest';
import { ref }                   from 'vue';
import { useComponentClass }     from '@/Lib/UseClass/Internal';

describe('useComponentClass', (): void => {
    const componentName: ComponentName = 'FoButton';
    const classKey                     = 'primary';
    const expectedClass                = 'btn-primary';
    const availableClasses             = { FoButton: { [classKey]: expectedClass } };

    it.each<[MaybeRefOrGetter<'FoButton'>, MaybeRefOrGetter<Record<'FoButton', Record<string, string>>>, MaybeRefOrGetter<string>]>([
        [componentName, availableClasses, classKey],
        [ref(componentName), ref(availableClasses), ref(classKey)],
        [(): 'FoButton' => componentName, (): Record<'FoButton', Record<string, string>> => availableClasses, (): string => classKey],
    ])('returns the right component class ', (
        componentName: MaybeRefOrGetter<'FoButton'>,
        availableClasses: MaybeRefOrGetter<Record<'FoButton', Record<string, string>>>,
        classKey: MaybeRefOrGetter<string>,
    ): void => {
        const actualClass = useComponentClass(
            componentName,
            availableClasses,
            classKey,
        );

        expect(actualClass.value).toBe(expectedClass);
    });
});
