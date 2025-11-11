import type { MaybeRefOrGetter } from 'vue';
import { useIdentifiable }       from '@/Lib/UseIdentifiable/Internal';
import { describe, expect, it }  from 'vitest';
import { ref }                   from 'vue';

describe('useIdentifiable', () => {
    interface TestIdentifiable {
        name: string;
    }

    const firstIdentifiable  = { name: 'one' };
    const secondIdentifiable = { name: 'two' };

    const identifiables: TestIdentifiable[] = [
        firstIdentifiable,
        secondIdentifiable,
    ];

    it.each<[
        MaybeRefOrGetter<MaybeRefOrGetter<TestIdentifiable>[]>,
        MaybeRefOrGetter<string | null>,
        MaybeRefOrGetter<'name'>,
        expectedIdentifiable: TestIdentifiable | null,
    ]>([
        [identifiables, null, 'name', null],
        [identifiables, 'non-existing-id', 'name', null],
        [identifiables, 'two', 'name', secondIdentifiable],
        [ref(identifiables), ref('one'), ref('name'), firstIdentifiable],
        [() => identifiables, () => 'two', () => 'name', secondIdentifiable],
    ])('returns the right identifiable by name', (
        identifiables: MaybeRefOrGetter<MaybeRefOrGetter<TestIdentifiable>[]>,
        id: MaybeRefOrGetter<string | null>,
        key: MaybeRefOrGetter<'name'>,
        expectedIdentifiable: TestIdentifiable | null,
    ) => {
        expect(useIdentifiable<'name', string, TestIdentifiable>(identifiables, id, key).value).toStrictEqual(expectedIdentifiable);
    });
});
