import type { FlyonUIVueAppDefaultConfig, TextColor } from '@/Lib';
import { describe, expect, it }                       from 'vitest';
import { ref }                                        from 'vue';
import { flyonUIVueAppDefaultConfig  }                from '@/Lib';
import { useTextColor }                               from '@/Lib/UseColor/Internal';

describe('useTextColor', (): void => {
    it('returns a color class if the color is defined', (): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useTextColor(config, 'FoLink', 'neutral').value).toBe('link-neutral');
    });

    it('returns the base color class if the color is the base one', (): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useTextColor(config, 'FoLink', (): TextColor => 'base').value).toBe('text-base-content');
    });
});
