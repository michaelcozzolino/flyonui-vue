import type { MaybeRefOrGetter }      from 'vue';
import type { Shape }                 from '@/Lib';
import { describe, expect, it }       from 'vitest';
import { computed, ref }              from 'vue';
import { flyonUIVueAppDefaultConfig } from '@/Lib';
import { isTextAllowedForShape }      from '@/Lib/UseShape/Internal';

describe('isTextAllowedForShape', () => {
    it.each<[MaybeRefOrGetter<Shape>, boolean]>([
        ['rounded', true],
        [() => 'circle', false],
        [ref('pilled'), true],
        [computed(() => 'square'), false],
    ])('should allow text for shape', (shape: MaybeRefOrGetter<Shape>, expectedResult: boolean) => {
        expect(isTextAllowedForShape(flyonUIVueAppDefaultConfig, 'FoButton', shape)).toBe(expectedResult);
    });
});
