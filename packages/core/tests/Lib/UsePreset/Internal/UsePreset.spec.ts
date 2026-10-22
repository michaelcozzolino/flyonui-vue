import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { usePreset }                       from '@/Lib/UsePreset/Internal';

describe('usePreset', () => {
    it('returns a preset class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(usePreset(config, 'FoButton', 'outline').value).toBe('btn-outline');
    });
});
