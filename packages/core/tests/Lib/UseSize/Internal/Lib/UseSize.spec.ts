import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { useSize }                         from '@/Lib/UseSize/Internal';

describe('useSize', () => {
    it('returns a size class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useSize(config, 'FoButton', 'extraLarge').value).toBe('btn-xl');
    });
});
