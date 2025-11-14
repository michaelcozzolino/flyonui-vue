import { useGlass }             from '@/Lib/UseGlass/Internal';
import { describe, expect, it } from 'vitest';

describe('useGlass', () => {
    it('returns a glass class', () => {
        expect(useGlass(true).value).toBe('glass');
    });
});
