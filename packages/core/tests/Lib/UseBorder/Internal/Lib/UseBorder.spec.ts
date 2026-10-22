import { describe, expect, it } from 'vitest';
import { useBorder }            from '@/Lib/UseBorder/Internal';

describe('useBorder', () => {
    it('returns a border class', () => {
        expect(useBorder('FoStats', true).value).not.toBe('');
    });
});
