import { describe, expect, it } from 'vitest';
import { useGlass }             from '@/Lib/UseGlass/Internal';

describe('useGlass', (): void => {
    it('returns a glass class', (): void => {
        expect(useGlass(true).value).toBe('glass');
    });
});
