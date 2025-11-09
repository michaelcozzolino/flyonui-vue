import { useResponsitivity }    from '@/Lib/UseResponsitivity/Internal';
import { describe, expect, it } from 'vitest';

describe('useResponsitivity', () => {
    it('returns a responsive class', () => {
        expect(useResponsitivity('FoTable', true).value).toBe('overflow-x-auto');
    });
});
