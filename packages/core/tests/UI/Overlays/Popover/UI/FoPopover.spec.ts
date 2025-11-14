import { FoBadge, FoButton }    from '@/UI/Components';
import { FoPopover }            from '@/UI/Overlays';
import { mount }                from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('FoPopover', () => {
    it('is rendered successfully', async () => {
        const wrapper = mount(FoPopover, {
            slots: {
                default: FoButton,
                body:    FoBadge,
            },
        });

        expect(wrapper.findAllComponents(FoButton)).toHaveLength(1);
        expect(wrapper.findAllComponents(FoBadge)).toHaveLength(0);
    });

    // todo: this test should be done in the screenshot ones
    it.skip('shows the body content when the button is clicked', async () => {
        const wrapper = mount(FoPopover, {
            slots: {
                default: FoButton,
                body:    FoBadge,
            },
        });

        const buttons = wrapper.findAllComponents(FoButton);

        expect(buttons.length).toBe(1);
        expect(wrapper.findAllComponents(FoBadge)).toHaveLength(0);

        await buttons[0]?.trigger('click');
        expect(wrapper.findAllComponents(FoBadge)).toHaveLength(1);
    });
});
