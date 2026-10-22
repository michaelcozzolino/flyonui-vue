import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { useShape }                        from '@/Lib/UseShape/Internal';

describe('useShape', () => {
    it('returns a shape class', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(useShape(config, 'FoButton', 'square').value).toBe('btn-square');
    });
});
