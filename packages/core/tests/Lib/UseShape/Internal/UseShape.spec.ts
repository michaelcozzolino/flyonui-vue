import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';

import { useShape }             from '@/Lib/UseShape/Internal';
import { describe, expect, it } from 'vitest';
import { ref }                  from 'vue';

describe('useShape', () => {
    it('returns a shape class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useShape(config, 'FoButton', 'square').value).toBe('btn-square');
    });
});
