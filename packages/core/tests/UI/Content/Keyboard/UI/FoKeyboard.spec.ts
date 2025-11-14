import { FoKeyboard }           from '@/UI/Content';
import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('FoKeyboard', () => {
    it('is rendered successfully', async () => {
        const key = 'M';

        const wrapper = mount(FoKeyboard, {
            slots: { default: key },
        });

        await flushPromises();

        expect(wrapper.findAll('kbd')).toHaveLength(1);
        expect(wrapper.text()).toBe(key);
    });
});
