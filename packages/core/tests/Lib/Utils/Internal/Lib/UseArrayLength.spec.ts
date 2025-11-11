import type { MaybeRefOrGetter } from 'vue';
import { useArrayLength }        from '@/Lib/Utils/Internal';
import { describe, expect, it }  from 'vitest';
import { ref  }                  from 'vue';

describe('useArrayLength', () => {
    it.each([
        [[1, 2], 2],
        [ref([1, () => 2, ref(7)]), 3],
        [() => [], 0],
    ])('returns the length of the array', (array: MaybeRefOrGetter<MaybeRefOrGetter<number>[]>, expectedLength: number) => {
        expect(useArrayLength(array).value).toBe(expectedLength);
    });
});
