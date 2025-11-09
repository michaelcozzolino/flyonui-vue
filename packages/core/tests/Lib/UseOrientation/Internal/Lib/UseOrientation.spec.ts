import { useOrientation }       from '@/Lib/UseOrientation/Internal';
import { describe, expect, it } from 'vitest';

describe('useOrientation', () => {
    it('returns an orientation class', () => {
        expect(useOrientation('FoJoin', 'vertical').value).toBe('join-vertical');
    });
});
