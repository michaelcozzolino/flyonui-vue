import { useAlignment }         from '@/Lib/UseAlignment/Internal';
import { describe, expect, it } from 'vitest';

describe('useAlignment', () => {
    it('returns an alignment class', () => {
        expect(useAlignment('FoPagination', 'center').value).toBe('justify-center');
    });
});
