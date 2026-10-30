import { describe, expect, it } from 'vitest';
import { useBorder }            from '@/Lib/UseBorder/Internal';

describe('useBorder', (): void => {
    it('returns a border class', (): void => {
        expect(useBorder('FoStats', true).value).not.toBe('');
    });
});
