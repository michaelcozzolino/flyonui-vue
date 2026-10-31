import { describe, expect, it } from 'vitest';
import { useValidity }          from '@/Lib/UseValidity/Internal';

describe('useValidity', (): void => {
    it('returns a validity class', (): void => {
        expect(useValidity(false).value).toBe('is-invalid');
    });
});
