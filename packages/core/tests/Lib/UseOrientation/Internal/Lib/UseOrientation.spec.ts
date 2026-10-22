import { describe, expect, it } from 'vitest';
import { useOrientation }       from '@/Lib/UseOrientation/Internal';

describe('useOrientation', () => {
    it('returns an orientation class', () => {
        expect(useOrientation('FoJoin', 'vertical').value).toBe('join-vertical');
    });
});
