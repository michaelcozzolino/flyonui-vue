import { describe, expect, it } from 'vitest';
import { useValidity }          from '@/Lib/UseValidity/Internal';

describe('useValidity', () => {
    it('returns a validity class', () => {
        expect(useValidity(false).value).toBe('is-invalid');
    });
});
