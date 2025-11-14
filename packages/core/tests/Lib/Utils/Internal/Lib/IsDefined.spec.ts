import type { MaybeRefOrGetter } from 'vue';
import { isDefined }             from '@/Lib/Utils/Internal';
import { describe, expect, it }  from 'vitest';
import {  ref }                  from 'vue';

describe('isDefined', () => {
    it.each<[MaybeRefOrGetter<string | undefined>, boolean]>([
        ['value', true],
        [ref(undefined), false],
        [() => 'value', true],
    ])('checks if the value is defined', (value: MaybeRefOrGetter<string | undefined>, expectedResult: boolean) => {
        expect(isDefined(value)).toBe(expectedResult);
    });
});
