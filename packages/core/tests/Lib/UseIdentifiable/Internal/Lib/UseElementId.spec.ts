import type { ComputedRef, MaybeRefOrGetter, SetupContext } from 'vue';
import { flushPromises, mount }                             from '@vue/test-utils';
import { describe, expect, it }                             from 'vitest';
import { defineComponent, ref, toValue }                    from 'vue';
import { useElementId }                                     from '@/Lib/UseIdentifiable/Internal';

describe('useElementId', (): void => {
    it.each<[MaybeRefOrGetter<string>]>([
        ['id'],
        [ref('id1')],
        [(): string => 'id2'],
    ])('returns the given id', async (id: MaybeRefOrGetter<string>): Promise<void> => {
        const TestComponent = defineComponent({
            template: '<div :id="elementId">test</div>',
            setup:    (_props: Record<never, never>, _ctx: SetupContext): { elementId: ComputedRef<string> } => {
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

    it('returns the generated vue id', async (): Promise<void> => {
        const TestComponent = defineComponent({
            template: '<div :id="elementId">test</div>',
            setup:    (_props: Record<never, never>, _ctx: SetupContext): { elementId: ComputedRef<string> } => {
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
