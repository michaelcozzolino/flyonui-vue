import type { MaybeRefOrGetter } from 'vue';
import { describe, expect, it }  from 'vitest';
import { ref  }                  from 'vue';
import { useArrayLength }        from '@/Lib/Utils/Internal';

describe('useArrayLength', (): void => {
    it.each([
        [[1, 2], 2],
        [ref([1, (): number => 2, ref(7)]), 3],
        [(): number[] => [], 0],
    ])('returns the length of the array', (array: MaybeRefOrGetter<MaybeRefOrGetter<number>[]>, expectedLength: number): void => {
        expect(useArrayLength(array).value).toBe(expectedLength);
    });
});
