import type { MaybeRefOrGetter }      from 'vue';
import type { Shape }                 from '@/Lib';
import { describe, expect, it }       from 'vitest';
import { computed, ref }              from 'vue';
import { flyonUIVueAppDefaultConfig } from '@/Lib';
import { isTextAllowedForShape }      from '@/Lib/UseShape/Internal';

describe('isTextAllowedForShape', (): void => {
    it.each<[MaybeRefOrGetter<Shape>, boolean]>([
        ['rounded', true],
        [(): Shape => 'circle', false],
        [ref('pilled'), true],
        [computed((): Shape => 'square'), false],
    ])('should allow text for shape', (shape: MaybeRefOrGetter<Shape>, expectedResult: boolean): void => {
        expect(isTextAllowedForShape(flyonUIVueAppDefaultConfig, 'FoButton', shape)).toBe(expectedResult);
    });
});
