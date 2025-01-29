import type { Shape }            from '@/Shared/Types/Variants';
import type { MaybeRefOrGetter } from 'vue';
import { isTextAllowedForShape } from '@/Shared/Lib/IsTextAllowedForShape';
import { describe, expect, it }  from 'vitest';
import { computed, ref }         from 'vue';

describe('isTextAllowedForShape', () => {
    it.each<[MaybeRefOrGetter<Shape>, boolean]>([
        ['default', true],
        [() => 'circle', false],
        [ref('pilled'), true],
        [computed(() => 'square'), false],
    ])('should allow text for shape', (shape: MaybeRefOrGetter<Shape>, expectedResult: boolean) => {
        expect(isTextAllowedForShape(shape)).toBe(expectedResult);
    });
});
