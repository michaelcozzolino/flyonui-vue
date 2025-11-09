import { useValidity }          from '@/Lib/UseValidity/Internal';
import { describe, expect, it } from 'vitest';

describe('useValidity', () => {
    it('returns a validity class', () => {
        expect(useValidity(false).value).toBe('is-invalid');
    });
});
