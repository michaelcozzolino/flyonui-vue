import type { HeadingLevel }    from '@/UI/Content';
import { FoHeading }            from '@/UI/Content';
import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('FoHeading', () => {
    it('is rendered successfully with the right level', async () => {
        const headingLevel: HeadingLevel = '4';
        const text             = 'heading';

        const wrapper = mount(FoHeading, {
            props: { level: headingLevel },
            slots: { default: text },
        });

        await flushPromises();

        expect(wrapper.findAll(`h${headingLevel}`)).toHaveLength(1);
        expect(wrapper.text()).toBe(text);
    });
});
