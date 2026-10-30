import { describe, expect, it } from 'vitest';
import { useAlignment }         from '@/Lib/UseAlignment/Internal';

describe('useAlignment', (): void => {
    it('returns an alignment class', (): void => {
        expect(useAlignment('FoPagination', 'center').value).toBe('justify-center');
    });
});
