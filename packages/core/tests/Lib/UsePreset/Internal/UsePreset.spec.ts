import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';

import { usePreset }            from '@/Lib/UsePreset/Internal';
import { describe, expect, it } from 'vitest';
import { ref }                  from 'vue';

describe('usePreset', () => {
    it('returns a preset class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(usePreset(config, 'FoButton', 'outline').value).toBe('btn-outline');
    });
});
