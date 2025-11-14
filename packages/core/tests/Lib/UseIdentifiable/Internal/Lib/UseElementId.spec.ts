import type { MaybeRefOrGetter }         from 'vue';
import { useElementId }                  from '@/Lib/UseIdentifiable/Internal';
import { flushPromises, mount }          from '@vue/test-utils';
import { describe, expect, it }          from 'vitest';
import { defineComponent, ref, toValue } from 'vue';

describe('useElementId', () => {
    it.each<[MaybeRefOrGetter<string>]>([
        ['id'],
        [ref('id1')],
        [() => 'id2'],
    ])('returns the given id', async (id: MaybeRefOrGetter<string>) => {
        const TestComponent = defineComponent({
            template: '<div :id="elementId">test</div>',
            setup:    (_props, _ctx) => {
                const elementId = useElementId(id);

                return { elementId };
            },
        });

        const wrapper = mount(TestComponent);

        await flushPromises();

        const divs = wrapper.findAll('div');

        expect(divs.length).toBe(1);
        expect(divs[0]?.attributes('id')).toBe(toValue(id));
    });

    it('returns the generated vue id', async () => {
        const TestComponent = defineComponent({
            template: '<div :id="elementId">test</div>',
            setup:    (_props, _ctx) => {
                const elementId = useElementId(undefined);

                return { elementId };
            },
        });

        const wrapper = mount(TestComponent);

        await flushPromises();

        const divs = wrapper.findAll('div');

        expect(divs.length).toBe(1);
        expect(divs[0]?.attributes('id')).not.toBe('');
    });
});
