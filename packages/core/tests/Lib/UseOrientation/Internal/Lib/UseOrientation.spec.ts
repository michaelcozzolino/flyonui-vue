import { describe, expect, it } from 'vitest';
import { useOrientation }       from '@/Lib/UseOrientation/Internal';

describe('useOrientation', (): void => {
    it('returns an orientation class', (): void => {
        expect(useOrientation('FoJoin', 'vertical').value).toBe('join-vertical');
    });
});
