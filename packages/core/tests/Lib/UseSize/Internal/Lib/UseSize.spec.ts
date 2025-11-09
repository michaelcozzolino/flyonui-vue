import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';

import { useSize }              from '@/Lib/UseSize/Internal';
import { describe, expect, it } from 'vitest';
import { ref }                  from 'vue';

describe('useSize', () => {
    it('returns a size class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useSize(config, 'FoButton', 'extraLarge').value).toBe('btn-xl');
    });
});
