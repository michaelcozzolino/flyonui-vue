import { useStripes }           from '@/Lib/UseStripes/Internal';
import { describe, expect, it } from 'vitest';

describe('useStripes', () => {
    it('returns a stripes class', () => {
        expect(useStripes('FoListGroupItem', true).value).toBe('bg-base-200');
    });
});
