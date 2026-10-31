import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { FoBadge, FoButton }    from '@/UI/Components';
import { FoTooltip }            from '@/UI/Overlays';

describe('FoTooltip', (): void => {
    it('is rendered successfully', async (): Promise<void> => {
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
