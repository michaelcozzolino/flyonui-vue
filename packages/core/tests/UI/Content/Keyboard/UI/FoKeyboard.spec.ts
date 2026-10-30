import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { FoKeyboard }           from '@/UI/Content';

describe('FoKeyboard', (): void => {
    it('is rendered successfully', async (): Promise<void> => {
        const key = 'M';

        const wrapper = mount(FoKeyboard, {
            slots: { default: key },
        });

        await flushPromises();

        expect(wrapper.findAll('kbd')).toHaveLength(1);
        expect(wrapper.text()).toBe(key);
    });
});
