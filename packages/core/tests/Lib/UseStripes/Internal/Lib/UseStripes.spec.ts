import { describe, expect, it } from 'vitest';
import { useStripes }           from '@/Lib/UseStripes/Internal';

describe('useStripes', () => {
    it('returns a stripes class', () => {
        expect(useStripes('FoListGroupItem', true).value).toBe('bg-base-200');
    });
});
