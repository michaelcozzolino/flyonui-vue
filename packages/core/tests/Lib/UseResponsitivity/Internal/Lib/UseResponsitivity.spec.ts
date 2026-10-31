import { describe, expect, it } from 'vitest';
import { useResponsitivity }    from '@/Lib/UseResponsitivity/Internal';

describe('useResponsitivity', (): void => {
    it('returns a responsive class', (): void => {
        expect(useResponsitivity('FoTable', true).value).toBe('overflow-x-auto');
    });
});
