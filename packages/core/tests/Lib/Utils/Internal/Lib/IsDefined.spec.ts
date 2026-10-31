import type { MaybeRefOrGetter } from 'vue';
import { describe, expect, it }  from 'vitest';
import {  ref }                  from 'vue';
import { isDefined }             from '@/Lib/Utils/Internal';

describe('isDefined', (): void => {
    it.each<[MaybeRefOrGetter<string | undefined>, boolean]>([
        ['value', true],
        [ref(undefined), false],
        [(): string => 'value', true],
    ])('checks if the value is defined', (value: MaybeRefOrGetter<string | undefined>, expectedResult: boolean): void => {
        expect(isDefined(value)).toBe(expectedResult);
    });
});
