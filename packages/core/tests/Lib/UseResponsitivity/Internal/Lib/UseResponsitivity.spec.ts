import { describe, expect, it } from 'vitest';
import { useResponsitivity }    from '@/Lib/UseResponsitivity/Internal';

describe('useResponsitivity', () => {
    it('returns a responsive class', () => {
        expect(useResponsitivity('FoTable', true).value).toBe('overflow-x-auto');
    });
});
