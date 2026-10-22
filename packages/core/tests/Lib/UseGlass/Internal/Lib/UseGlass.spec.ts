import { describe, expect, it } from 'vitest';
import { useGlass }             from '@/Lib/UseGlass/Internal';

describe('useGlass', () => {
    it('returns a glass class', () => {
        expect(useGlass(true).value).toBe('glass');
    });
});
