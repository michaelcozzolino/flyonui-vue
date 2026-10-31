import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { useColor }                        from '@/Lib/UseColor/Internal';

describe('useColor', (): void => {
    it('returns a color class', (): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useColor(config, 'FoButton', 'primary').value).toBe('btn-primary');
    });
});
