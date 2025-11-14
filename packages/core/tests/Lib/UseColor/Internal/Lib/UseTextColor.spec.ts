import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig  }     from '@/Lib';
import { useTextColor }                    from '@/Lib/UseColor/Internal';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';

describe('useTextColor', () => {
    it('returns a color class if the color is defined', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useTextColor(config, 'FoLink', 'neutral').value).toBe('link-neutral');
    });

    it('returns no class if the color is not defined', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useTextColor(config, 'FoLink', () => undefined).value).toBe('');
    });
});
