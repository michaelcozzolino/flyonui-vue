import { FoBadge, FoButton }    from '@/UI/Components';
import { FoTooltip }            from '@/UI/Overlays';
import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('FoTooltip', () => {
    it('is rendered successfully', async () => {
        const wrapper = mount(FoTooltip, {
            slots: {
                default: FoButton,
                body:    FoBadge,
            },
        });

        await flushPromises();

        expect(wrapper.findAllComponents(FoButton)).toHaveLength(1);
        expect(wrapper.findAllComponents(FoBadge)).toHaveLength(0);
    });
});
