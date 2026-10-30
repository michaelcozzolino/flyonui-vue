import type { MaybeRefOrGetter } from 'vue';
import { describe, expect, it }  from 'vitest';
import { ref }                   from 'vue';
import { useClass }              from '@/Lib/UseClass/Internal';

describe('useClass', (): void => {
    const positiveClass  = 'positive-class';
    const negativeClass  = 'negative-class';
    const undefinedClass = 'undefined-class';

    it.each<[MaybeRefOrGetter<boolean | undefined>, MaybeRefOrGetter<string>, MaybeRefOrGetter<string>, MaybeRefOrGetter<string>, string]>([
        [true, positiveClass, negativeClass, undefinedClass, positiveClass],
        [ref(false), ref(positiveClass), ref(negativeClass), ref(undefinedClass), negativeClass],
        [(): undefined => undefined, (): string => positiveClass, (): string => negativeClass, (): string => undefinedClass, undefinedClass],
    ])('returns the right class', (
        test: MaybeRefOrGetter<boolean | undefined>,
        positiveClass: MaybeRefOrGetter<string>,
        negativeClass: MaybeRefOrGetter<string>,
        undefinedClass: MaybeRefOrGetter<string>,
        expectedClass: string,
    ): void => {
        expect(useClass(test, positiveClass, negativeClass, undefinedClass).value).toBe(expectedClass);
    });

    it.each<[MaybeRefOrGetter<boolean | undefined>]>([
        [false],
        [undefined],
    ])('returns the right default class', (test: MaybeRefOrGetter<boolean | undefined>): void => {
        expect(useClass(test, positiveClass).value).toBe('');
    });
});
