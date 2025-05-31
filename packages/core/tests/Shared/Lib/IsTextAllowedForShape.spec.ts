import type { Shape }                 from '@/Shared/UseShape';
import type { MaybeRefOrGetter }      from 'vue';
import { flyonUIVueAppDefaultConfig } from '@/Shared/UseFlyonUIVueAppConfig';
import { isTextAllowedForShape }      from '@/Shared/UseShape/Internal';
import { describe, expect, it }       from 'vitest';
import { computed, ref }              from 'vue';

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
