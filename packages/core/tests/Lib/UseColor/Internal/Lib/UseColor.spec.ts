import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { useColor }                        from '@/Lib/UseColor/Internal';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';

describe('useColor', () => {
    it('returns a color class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useColor(config, 'FoButton', 'primary').value).toBe('btn-primary');
    });
});
