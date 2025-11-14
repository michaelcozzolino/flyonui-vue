import { useBorder }            from '@/Lib/UseBorder/Internal';
import { describe, expect, it } from 'vitest';

describe('useBorder', () => {
    it('returns a border class', () => {
        expect(useBorder('FoStats', true).value).not.toBe('');
    });
});
