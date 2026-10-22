import { describe, expect, it } from 'vitest';
import { useAlignment }         from '@/Lib/UseAlignment/Internal';

describe('useAlignment', () => {
    it('returns an alignment class', () => {
        expect(useAlignment('FoPagination', 'center').value).toBe('justify-center');
    });
});
